import ServicePageTemplate from '@/components/ServicePageTemplate';
import { SERVICE_PAGES } from '@/lib/data';

const data = SERVICE_PAGES['best-customized-office-space'];

export const metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
};

export default function BestCustomizedOfficeSpacePage() {
  return <ServicePageTemplate data={data} />;
}
