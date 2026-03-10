import ServicePageTemplate from '@/components/ServicePageTemplate';
import { SERVICE_PAGES } from '@/lib/data';

const data = SERVICE_PAGES['zero-brokerage'];

export const metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
};

export default function ZeroBrokeragePage() {
  return <ServicePageTemplate data={data} />;
}
