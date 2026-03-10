import ServicePageTemplate from '@/components/ServicePageTemplate';
import { SERVICE_PAGES } from '@/lib/data';

const data = SERVICE_PAGES['guided-visits-one-to-one-consultation'];

export const metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
};

export default function GuidedVisitsPage() {
  return <ServicePageTemplate data={data} />;
}
