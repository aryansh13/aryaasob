'use client'
import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

const FractalTree: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const p5InstanceRef = useRef<p5>();

  useEffect(() => {
    // Membuat p5 instance hanya jika belum ada
    if (!p5InstanceRef.current) {
      p5InstanceRef.current = new p5(sketch, canvasRef.current!);
    }

    // Membersihkan p5 instance saat komponen dibongkar
    return () => {
      p5InstanceRef.current?.remove();
      p5InstanceRef.current = undefined;
    };
  }, []);

  // Sketch untuk p5
  const sketch = (p: p5) => {
    let angle = 0;

    p.setup = () => {
      p.createCanvas(350, 350);
    };

    p.draw = () => {
      p.background("#0a192f");
      // Menentukan sudut berdasarkan waktu
      angle = p.millis() / 100; // Menggunakan waktu dalam detik sebagai sudut
      angle = p.map(angle % 90, 0, 90, -90, 90); // Memastikan sudut tetap antara -90 dan 90 derajat
      p.stroke(255);
      p.strokeWeight(2);
      p.translate(p.width * 0.5, p.height);
      branch(100, p);
    };

    const branch = (len: number, p: p5) => {
      p.line(0, 0, 0, -len);
      p.translate(0, -len);
      if (len > 4) {
        p.push();
        p.rotate(-p.radians(angle)); // Mengonversi sudut ke radian sebelum rotasi
        branch(len * 0.67, p);
        p.pop();
        p.push();
        p.rotate(p.radians(angle)); // Mengonversi sudut ke radian sebelum rotasi
        branch(len * 0.67, p);
        p.pop();
      }
    };
  };

  // Menggunakan canvasRef untuk menempatkan canvas p5 di dalam komponen
  return <div className='fractal flex justify-center -mt-10'><div ref={canvasRef}></div></div>;
};

export default FractalTree;
