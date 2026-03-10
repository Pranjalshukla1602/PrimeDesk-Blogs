import ServicePageTemplate from '@/components/ServicePageTemplate';
import { SERVICE_PAGES } from '@/lib/data';

const data = SERVICE_PAGES['multi-city-offices'];

export const metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
};

export default function MultiCityOfficesPage() {
  return <ServicePageTemplate data={data} />;
}
