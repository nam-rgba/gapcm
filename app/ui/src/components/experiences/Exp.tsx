import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Environment, MeshDistortMaterial, Sphere } from '@react-three/drei';

const Scene = () => {

    
  return (
    <>
      {/* 1. Ánh sáng môi trường thực tế (HDR) */}
      <Environment preset="city" />

      {/* 2. Vật thể trôi nổi */}
      <Float speed={4} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[1, 64, 64]} scale={2}>
          {/* MeshDistortMaterial tạo hiệu ứng biến dạng "ảo ma" */}
          <MeshDistortMaterial 
            color="#8352FD" 
            distort={0.4} 
            speed={2} 
            roughness={0} 
          />
        </Sphere>
      </Float>

      {/* 3. Controls */}
      <OrbitControls enableZoom={false} autoRotate />
    </>
  );
};

export default function Experience() {
  return (
    <div style={{ width: '100%', height: '100vh', background: '#000', }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Scene />
      </Canvas>
    </div>
  );
}