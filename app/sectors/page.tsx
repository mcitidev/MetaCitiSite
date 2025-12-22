import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { TransportationSectors } from "@/components/TransportationSectors";

export default function TransportationSectorsPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            <TransportationSectors />

            <Footer />
        </main>
    );
}
