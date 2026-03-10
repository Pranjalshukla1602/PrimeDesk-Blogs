import ServicePageTemplate from '@/components/ServicePageTemplate';
import { SERVICE_PAGES } from '@/lib/data';

const data = SERVICE_PAGES['cost-effective-office'];

export const metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
};

export default function CostEffectiveOfficePage() {
  return <ServicePageTemplate data={data} />;
}
