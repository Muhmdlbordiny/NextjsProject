'use client';

import { useEffect } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function BootstrapClient() {
  useEffect(() => {
    // الكود هنا يتم تنفيذه فقط في المتصفح
    console.log("Bootstrap JS loaded on client side");
  }, []);

  return null;
}
