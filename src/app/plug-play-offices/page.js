import ServicePageTemplate from '@/components/ServicePageTemplate';
import { SERVICE_PAGES } from '@/lib/data';

const data = SERVICE_PAGES['plug-play-offices'];

export const metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
};

export default function PlugPlayOfficesPage() {
  return <ServicePageTemplate data={data} />;
}
