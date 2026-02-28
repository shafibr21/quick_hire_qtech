// Mock Data
// const categories = [
//   { name: 'Design', count: '235 jobs available', icon: PenTool },
//   { name: 'Sales', count: '450 jobs available', icon: BarChart3 },
//   { name: 'Marketing', count: '140 jobs available', icon: MonitorPlay },
//   { name: 'Finance', count: '325 jobs available', icon: Calculator },
//   { name: 'Technology', count: '436 jobs available', icon: Code2 },
//   { name: 'Engineering', count: '542 jobs available', icon: Code2 },
//   { name: 'Business', count: '211 jobs available', icon: Briefcase },
//   { name: 'Human Resource', count: '346 jobs available', icon: Users },
// ];

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

const mockJobs = [
  {
    id: '1',
    title: 'Email Marketing',
    company: 'Revolut',
    location: 'Madrid, Spain',
    category: 'Marketing, Design',
    description: 'Revolut is looking for Email Marketing to help the team design and process.',
    created_at: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'Brand Designer',
    company: 'Dropbox',
    location: 'San Francisco, US',
    category: 'Design, Business',
    description: 'Dropbox is looking for Brand Designer to help the team design and process.',
    created_at: new Date().toISOString(),
  },
  {
    id: '3',
    title: 'Email Marketing',
    company: 'Pitch',
    location: 'Berlin, Germany',
    category: 'Marketing',
    description: 'Pitch is looking for Email Marketing to help the team design and process.',
    created_at: new Date().toISOString(),
  },
  {
    id: '4',
    title: 'Visual Designer',
    company: 'Blinkist',
    location: 'Granada, Spain',
    category: 'Design',
    description: 'Blinkist is looking for Visual Designer to help the team design and process.',
    created_at: new Date().toISOString(),
  },
  {
    id: '5',
    title: 'Product Designer',
    company: 'ClassPass',
    location: 'Manchester, UK',
    category: 'Marketing, Design',
    description: 'ClassPass is looking for Product Designer to help the team design and process.',
    created_at: new Date().toISOString(),
  },
  {
    id: '6',
    title: 'Lead Designer',
    company: 'Canva',
    location: 'Ontario, Canada',
    category: 'Design, Business',
    description: 'Canva is looking for Lead Designer to help the team design and process.',
    created_at: new Date().toISOString(),
  },
  {
    id: '7',
    title: 'Brand Strategist',
    company: 'GoDaddy',
    location: 'Marseille, France',
    category: 'Marketing',
    description: 'GoDaddy is looking for Brand Strategist to help the team design and process.',
    created_at: new Date().toISOString(),
  },
  {
    id: '8',
    title: 'Data Analyst',
    company: 'Twitter',
    location: 'San Diego, US',
    category: 'Technology',
    description: 'Twitter is looking for Data Analyst to help the team design and process.',
    created_at: new Date().toISOString(),
  },
];

const latestJobs = [
  {
    id: '9',
    title: 'Social Media Assistant',
    company: 'Nomad',
    location: 'Paris, France',
    category: 'Marketing, Design',
    description: 'We are looking for a Social Media Assistant.',
    created_at: new Date().toISOString(),
  },
  {
    id: '10',
    title: 'Social Media Assistant',
    company: 'Netlify',
    location: 'Paris, France',
    category: 'Marketing, Design',
    description: 'We are looking for a Social Media Assistant.',
    created_at: new Date().toISOString(),
  },
  {
    id: '11',
    title: 'Brand Designer',
    company: 'Dropbox',
    location: 'San Francisco, US',
    category: 'Design',
    description: 'We are looking for a Brand Designer.',
    created_at: new Date().toISOString(),
  },
  {
    id: '12',
    title: 'Brand Designer',
    company: 'Maze',
    location: 'San Francisco, US',
    category: 'Design',
    description: 'We are looking for a Brand Designer.',
    created_at: new Date().toISOString(),
  },
  {
    id: '13',
    title: 'Interactive Developer',
    company: 'Terraform',
    location: 'Hamburg, Germany',
    category: 'Technology, Design',
    description: 'We are looking for a Interactive Developer.',
    created_at: new Date().toISOString(),
  },
  {
    id: '14',
    title: 'Interactive Developer',
    company: 'Udacity',
    location: 'Hamburg, Germany',
    category: 'Technology, Design',
    description: 'We are looking for a Interactive Developer.',
    created_at: new Date().toISOString(),
  },
  {
    id: '15',
    title: 'HR Manager',
    company: 'Packer',
    location: 'Lucerne, Switzerland',
    category: 'Human Resource',
    description: 'We are looking for a HR Manager.',
    created_at: new Date().toISOString(),
  },
  {
    id: '16',
    title: 'HR Manager',
    company: 'Webflow',
    location: 'Lucerne, Switzerland',
    category: 'Human Resource',
    description: 'We are looking for a HR Manager.',
    created_at: new Date().toISOString(),
  },
];


export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">

      </main>
      <Footer />
    </>
  );
}
