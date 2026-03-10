import ServicePageTemplate from '@/components/ServicePageTemplate';
import { SERVICE_PAGES } from '@/lib/data';

const data = SERVICE_PAGES['hassle-free-experience'];

export const metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
};

export default function HassleFreePage() {
  return <ServicePageTemplate data={data} />;
}
