import ServicePageTemplate from '@/components/ServicePageTemplate';
import { SERVICE_PAGES } from '@/lib/data';

const data = SERVICE_PAGES['private-shared-workspaces'];

export const metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
};

export default function PrivateSharedWorkspacesPage() {
  return <ServicePageTemplate data={data} />;
}
