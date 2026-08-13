import { useEffect, useRef } from "react";
import * as THREE from "three";
import { Box, Typography } from "@mui/material";
import { globalScaleStyles } from "./GlobalScale.styles";
import { stats } from "../../constant/constantData";

const VERT = `
  attribute vec2 aDir;
  attribute float aPhase, aSpeed, aDrift, aIsEnd, aOpacity;
  varying float vOpacity;
  uniform float uTime, uHover;
  uniform vec2 uMouse;
  void main() {
    vec3 p = position;
    p.xy += aDir * sin(uTime * aSpeed + aPhase) * aDrift * aIsEnd;
  
    vec2 toVert = p.xy - uMouse;
    float dist = length(toVert);
    float force = smoothstep(220.0, 0.0, dist) * 60.0 * uHover;
    p.xy += normalize(toVert + 0.0001) * force * aIsEnd;
    vOpacity = aOpacity;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }`;
const FRAG_LINE = `varying float vOpacity; void main(){ gl_FragColor = vec4(0.23,0.34,0.86,vOpacity); }`;
const FRAG_DOT = `
  varying float vOpacity;
  void main(){
    float d = length(gl_PointCoord - 0.5);
    if (d > 0.5) discard;
    gl_FragColor = vec4(0.20,0.31,0.86,vOpacity);
  }`;
const VERT_DOT = VERT.replace(
  "gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);",
  "gl_PointSize = aOpacity * 8.0; gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);",
);

const GlobalScale = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(window.devicePixelRatio || 1);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(0, 1, 0, 1, -10, 10);
    camera.position.z = 1;

    const uniforms = {
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(-9999, -9999) },
      uHover: { value: 0 },
    };
    let hoverTarget = 0;
    let lineMesh, dotMesh, rafId;

    const build = (W, H) => {
      const COUNT = 300;
      const SCALE = 1.4;
      const originX = W / 2,
        originY = H + 40 * SCALE;
      const maxR = Math.min(W, H * 2.1, 500) * 0.55 * SCALE;

      const linePos = new Float32Array(COUNT * 6),
        dotPos = new Float32Array(COUNT * 3);
      const aDir = new Float32Array(COUNT * 4),
        aDirDot = new Float32Array(COUNT * 2);
      const aPhase = new Float32Array(COUNT * 2),
        aPhaseDot = new Float32Array(COUNT);
      const aSpeed = new Float32Array(COUNT * 2),
        aSpeedDot = new Float32Array(COUNT);
      const aDrift = new Float32Array(COUNT * 2),
        aDriftDot = new Float32Array(COUNT);
      const aIsEnd = new Float32Array(COUNT * 2);
      const aOpacity = new Float32Array(COUNT * 2),
        aOpacityDot = new Float32Array(COUNT);

      for (let i = 0; i < COUNT; i++) {
        const t = i / (COUNT - 1);
        const spread =
          Math.pow(Math.abs(t - 0.5) * 2, 1.8) * Math.sign(t - 0.5 || 1);
        const angle = -Math.PI / 2 + spread * (Math.PI / 2.05);
        const dx = Math.cos(angle),
          dy = Math.sin(angle);
        const len = maxR * (0.35 + Math.random() * 0.65);
        const off = (20 + Math.random() * 40) * SCALE;
        const phase = Math.random() * Math.PI * 2,
          speed = 0.4 + Math.random() * 0.5,
          drift = (4 + Math.random() * 8) * SCALE;
        const opacity = 0.35 + Math.random() * 0.5;

        const x1 = originX + dx * off,
          y1 = originY + dy * off;
        const x2 = originX + dx * (off + len),
          y2 = originY + dy * (off + len);

        linePos.set([x1, y1, 0, x2, y2, 0], i * 6);
        [0, 1].forEach((j) => {
          aDir.set([dx, dy], i * 4 + j * 2);
          aPhase[i * 2 + j] = phase;
          aSpeed[i * 2 + j] = speed;
          aDrift[i * 2 + j] = drift;
          aIsEnd[i * 2 + j] = j;
          aOpacity[i * 2 + j] = opacity;
        });

        dotPos.set([x2, y2, 0], i * 3);
        aDirDot.set([dx, dy], i * 2);
        aPhaseDot[i] = phase;
        aSpeedDot[i] = speed;
        aDriftDot[i] = drift;
        aOpacityDot[i] = opacity;
      }

      const lineGeo = new THREE.BufferGeometry();
      lineGeo.setAttribute("position", new THREE.BufferAttribute(linePos, 3));
      lineGeo.setAttribute("aDir", new THREE.BufferAttribute(aDir, 2));
      lineGeo.setAttribute("aPhase", new THREE.BufferAttribute(aPhase, 1));
      lineGeo.setAttribute("aSpeed", new THREE.BufferAttribute(aSpeed, 1));
      lineGeo.setAttribute("aDrift", new THREE.BufferAttribute(aDrift, 1));
      lineGeo.setAttribute("aIsEnd", new THREE.BufferAttribute(aIsEnd, 1));
      lineGeo.setAttribute("aOpacity", new THREE.BufferAttribute(aOpacity, 1));

      const dotGeo = new THREE.BufferGeometry();
      dotGeo.setAttribute("position", new THREE.BufferAttribute(dotPos, 3));
      dotGeo.setAttribute("aDir", new THREE.BufferAttribute(aDirDot, 2));
      dotGeo.setAttribute("aPhase", new THREE.BufferAttribute(aPhaseDot, 1));
      dotGeo.setAttribute("aSpeed", new THREE.BufferAttribute(aSpeedDot, 1));
      dotGeo.setAttribute("aDrift", new THREE.BufferAttribute(aDriftDot, 1));
      dotGeo.setAttribute(
        "aIsEnd",
        new THREE.BufferAttribute(new Float32Array(COUNT).fill(1), 1),
      );
      dotGeo.setAttribute(
        "aOpacity",
        new THREE.BufferAttribute(aOpacityDot, 1),
      );

      if (lineMesh) {
        scene.remove(lineMesh);
        lineMesh.geometry.dispose();
      }
      if (dotMesh) {
        scene.remove(dotMesh);
        dotMesh.geometry.dispose();
      }

      lineMesh = new THREE.LineSegments(
        lineGeo,
        new THREE.ShaderMaterial({
          uniforms,
          vertexShader: VERT,
          fragmentShader: FRAG_LINE,
          transparent: true,
        }),
      );
      dotMesh = new THREE.Points(
        dotGeo,
        new THREE.ShaderMaterial({
          uniforms,
          vertexShader: VERT_DOT,
          fragmentShader: FRAG_DOT,
          transparent: true,
        }),
      );
      scene.add(lineMesh, dotMesh);
    };

    const sizeToContainer = () => {
      const { width: W, height: H } = mount.getBoundingClientRect();
      renderer.setSize(W, H, false);
      camera.left = 0;
      camera.right = W;
      camera.top = 0;
      camera.bottom = H;
      camera.updateProjectionMatrix();
      build(W, H);
    };

    sizeToContainer();
    const ro = new ResizeObserver(sizeToContainer);
    ro.observe(mount);

    const onMove = (e) => {
      const r = mount.getBoundingClientRect();
      uniforms.uMouse.value.set(e.clientX - r.left, e.clientY - r.top);
      hoverTarget = 1;
    };
    const onLeave = () => {
      hoverTarget = 0;
    };
    mount.addEventListener("mousemove", onMove);
    mount.addEventListener("mouseleave", onLeave);

    const loop = (t) => {
      uniforms.uTime.value = t / 1000;
      uniforms.uHover.value += (hoverTarget - uniforms.uHover.value) * 0.08;
      renderer.render(scene, camera);
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      mount.removeEventListener("mousemove", onMove);
      mount.removeEventListener("mouseleave", onLeave);
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <Box id="scale" sx={globalScaleStyles.container}>
      <Box sx={globalScaleStyles.statsRow}>
        {stats.map((s) => (
          <Box key={s.number} sx={globalScaleStyles.statItem}>
            <Typography sx={globalScaleStyles.statNumber}>
              {s.number}
            </Typography>
            <Typography sx={globalScaleStyles.statLabel}>{s.label}</Typography>
          </Box>
        ))}
      </Box>

      <Box ref={mountRef} sx={globalScaleStyles.burstSection} />
      <Box sx={globalScaleStyles.des}>
        <Typography sx={globalScaleStyles.blackLine}>
          Powering businesses of all sizes.{" "}
          <Box component="span" sx={globalScaleStyles.greyLine}>
            Run your business on a reliable platform that adapts to your needs.
          </Box>
        </Typography>
      </Box>
    </Box>
  );
};
export default GlobalScale;
