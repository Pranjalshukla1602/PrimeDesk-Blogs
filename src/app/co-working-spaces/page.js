import ServicePageTemplate from '@/components/ServicePageTemplate';
import { SERVICE_PAGES } from '@/lib/data';

const data = SERVICE_PAGES['co-working-spaces'];

export const metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
};

export default function CoWorkingSpacesPage() {
  return <ServicePageTemplate data={data} />;
}
