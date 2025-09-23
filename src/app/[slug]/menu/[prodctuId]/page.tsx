import { notFound } from 'next/navigation';

import { db } from '@/lib/prisma';

import ProductHeader from './components/ProductHeader';

interface ProductPageProps {
  params: Promise<{ slug: string; prodctuId: string }>
}

export default async function ProductPage({ params }: ProductPageProps) {

  const { slug, prodctuId } = await params;
  const product = await db.product.findUnique({
    where: {
      id: prodctuId
    }
  });

  if (!product) {
    return notFound();
  }


  return (
    <div>
      <ProductHeader product={product} />
    </div>
  );
}
