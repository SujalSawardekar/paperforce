const fs = require('fs');
let c = fs.readFileSync('src/app/products/page.tsx', 'utf8');

if (!c.includes('import * as React from')) {
const imports = `import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/common/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ProductCard } from "@/components/common/product-card";

`;

  fs.writeFileSync('src/app/products/page.tsx', imports + c);
}
