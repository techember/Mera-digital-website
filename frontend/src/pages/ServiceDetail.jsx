import { useParams, Navigate } from 'react-router-dom';
import { getServiceBySlug } from '../data/servicesData';
import ServiceTemplate from '../components/ServiceTemplate';

/**
 * ServiceDetail — renders any individual service page using the shared ServiceTemplate.
 */
export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  // If slug not found, redirect to services listing
  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <ServiceTemplate
      title={service.title}
      desc={service.desc}
      about={service.about}
      image={service.image}
      points={service.points}
    />
  );
}

