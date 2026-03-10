import ServicePageTemplate from '@/components/ServicePageTemplate';
import { SERVICE_PAGES } from '@/lib/data';

const data = SERVICE_PAGES['conventional-office-space'];

export const metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
};

export default function ConventionalOfficeSpacePage() {
  return <ServicePageTemplate data={data} />;
}
