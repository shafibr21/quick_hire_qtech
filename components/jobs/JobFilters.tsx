import { Search, MapPin } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

export function JobFilters() {
    return (
        <div className="bg-white p-2 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 flex flex-col md:flex-row gap-2 max-w-4xl mx-auto w-full">
            <div className="flex-1 relative border-b md:border-b-0 md:border-r border-slate-100">
                <Input
                    icon={<Search size={18} />}
                    placeholder="Job title, keyword"
                    className="border-0 focus:ring-0 h-14 bg-transparent text-base font-epilogue"
                />
            </div>
            <div className="flex-1 relative group">
                <Input
                    icon={<MapPin size={18} />}
                    placeholder="Anywhere (Type location)"
                    className="border-0 focus:ring-0 h-14 bg-transparent text-base font-epilogue"
                />
            </div>
            <Button variant="primary" size="lg" className="h-14 md:w-40 text-base w-full md:mt-0 mt-2 font-epilogue">
                Search my job
            </Button>
        </div>
    );
}
