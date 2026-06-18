import Navbar from '@/components/Navbar';
import Results from '@/components/Results';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Client Results — Get Fit Steppa',
  robots: { index: false, follow: false },
};

export default function ResultsPage() {
  return (
    <main>
      <Navbar />
      <div style={{ paddingTop: 72 }}>
        <Results />
      </div>
      <Footer />
    </main>
  );
}
