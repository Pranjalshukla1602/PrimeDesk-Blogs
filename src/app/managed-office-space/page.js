import ServicePageTemplate from '@/components/ServicePageTemplate';
import { SERVICE_PAGES } from '@/lib/data';

const data = SERVICE_PAGES['managed-office-space'];

export const metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
};

export default function ManagedOfficeSpacePage() {
  return <ServicePageTemplate data={data} />;
}
