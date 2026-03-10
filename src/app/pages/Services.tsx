import { MobileLayout } from '../components/MobileLayout';
import { useState } from 'react';
import { MapPin, Phone, Clock, Globe, Search, Building2, Utensils, Bus, Heart, Wifi, ShoppingBag, GraduationCap } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

interface Service {
  id: string;
  name: string;
  category: string;
  address: string;
  phone: string;
  hours: string;
  distance: string;
  description: string;
}

export function Services() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const services: Service[] = [
    {
      id: '1',
      name: 'Nairobi Hospital',
      category: 'Healthcare',
      address: 'Argwings Kodhek Road, Nairobi',
      phone: '+254 20 284 5000',
      hours: '24/7',
      distance: '2.3 km',
      description: 'Full service hospital with emergency care',
    },
    {
      id: '2',
      name: 'Immigration Department',
      category: 'Government',
      address: 'Nyayo House, Kenyatta Avenue',
      phone: '+254 20 222 2022',
      hours: '8:00 AM - 5:00 PM',
      distance: '3.1 km',
      description: 'Visa extensions and permits',
    },
    {
      id: '3',
      name: 'Safaricom Shop',
      category: 'Telecom',
      address: 'Westlands, Nairobi',
      phone: '+254 722 000 000',
      hours: '8:00 AM - 6:00 PM',
      distance: '1.5 km',
      description: 'SIM cards, M-Pesa, internet packages',
    },
    {
      id: '4',
      name: 'Carrefour Supermarket',
      category: 'Shopping',
      address: 'The Hub Mall, Karen',
      phone: '+254 709 935 000',
      hours: '8:00 AM - 10:00 PM',
      distance: '4.2 km',
      description: 'Groceries and household items',
    },
    {
      id: '5',
      name: 'Java House',
      category: 'Restaurant',
      address: 'Kimathi Street, CBD',
      phone: '+254 20 222 8955',
      hours: '7:00 AM - 9:00 PM',
      distance: '2.8 km',
      description: 'Cafe and restaurant with WiFi',
    },
    {
      id: '6',
      name: 'University Library',
      category: 'Education',
      address: 'Campus Main Building',
      phone: '+254 20 123 4567',
      hours: '6:00 AM - 10:00 PM',
      distance: '0.5 km',
      description: 'Study materials and computer lab',
    },
    {
      id: '7',
      name: 'Matatu Stage',
      category: 'Transport',
      address: 'Campus Gate',
      phone: 'N/A',
      hours: '5:00 AM - 11:00 PM',
      distance: '0.2 km',
      description: 'Public transport to CBD and other areas',
    },
    {
      id: '8',
      name: 'Mama Njeri\'s Kitchen',
      category: 'Restaurant',
      address: 'Near Campus',
      phone: '+254 712 345 678',
      hours: '7:00 AM - 8:00 PM',
      distance: '0.3 km',
      description: 'Affordable local Kenyan food',
    },
  ];

  const categoryIcons: Record<string, any> = {
    Healthcare: Heart,
    Government: Building2,
    Telecom: Phone,
    Shopping: ShoppingBag,
    Restaurant: Utensils,
    Education: GraduationCap,
    Transport: Bus,
  };

  const filteredServices = services.filter(service =>
    service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const categories = Array.from(new Set(services.map(s => s.category)));

  return (
    <MobileLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-gray-900">Essential Services</h1>
          <p className="text-gray-600">Find everything you need nearby</p>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Search services..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 rounded-xl"
          />
        </div>

        {/* Tabs */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="w-full justify-start overflow-x-auto rounded-xl">
            <TabsTrigger value="all" className="rounded-lg">All</TabsTrigger>
            {categories.map(category => (
              <TabsTrigger key={category} value={category} className="rounded-lg">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="all" className="space-y-3 mt-4">
            {filteredServices.map((service) => {
              const Icon = categoryIcons[service.category] || MapPin;
              return (
                <div key={service.id} className="bg-white rounded-2xl p-4 shadow-sm space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="p-3 bg-blue-50 rounded-xl">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{service.name}</h3>
                      <div className="text-sm text-blue-600">{service.category}</div>
                    </div>
                    <div className="text-sm text-gray-500">{service.distance}</div>
                  </div>
                  
                  <p className="text-sm text-gray-600">{service.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-700">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span>{service.address}</span>
                    </div>
                    {service.phone !== 'N/A' && (
                      <div className="flex items-center gap-2 text-gray-700">
                        <Phone className="w-4 h-4 text-gray-400" />
                        <a href={`tel:${service.phone}`} className="text-blue-600">
                          {service.phone}
                        </a>
                      </div>
                    )}
                    <div className="flex items-center gap-2 text-gray-700">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span>{service.hours}</span>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(service.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 bg-blue-500 text-white text-center rounded-xl hover:bg-blue-600 transition-colors text-sm font-medium"
                    >
                      Get Directions
                    </a>
                    {service.phone !== 'N/A' && (
                      <a
                        href={`tel:${service.phone}`}
                        className="py-2 px-4 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors text-sm font-medium"
                      >
                        Call
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </TabsContent>

          {categories.map(category => (
            <TabsContent key={category} value={category} className="space-y-3 mt-4">
              {services.filter(s => s.category === category).map((service) => {
                const Icon = categoryIcons[service.category] || MapPin;
                return (
                  <div key={service.id} className="bg-white rounded-2xl p-4 shadow-sm space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="p-3 bg-blue-50 rounded-xl">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{service.name}</h3>
                        <div className="text-sm text-blue-600">{service.category}</div>
                      </div>
                      <div className="text-sm text-gray-500">{service.distance}</div>
                    </div>
                    
                    <p className="text-sm text-gray-600">{service.description}</p>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-gray-700">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span>{service.address}</span>
                      </div>
                      {service.phone !== 'N/A' && (
                        <div className="flex items-center gap-2 text-gray-700">
                          <Phone className="w-4 h-4 text-gray-400" />
                          <a href={`tel:${service.phone}`} className="text-blue-600">
                            {service.phone}
                          </a>
                        </div>
                      )}
                      <div className="flex items-center gap-2 text-gray-700">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span>{service.hours}</span>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(service.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 bg-blue-500 text-white text-center rounded-xl hover:bg-blue-600 transition-colors text-sm font-medium"
                      >
                        Get Directions
                      </a>
                      {service.phone !== 'N/A' && (
                        <a
                          href={`tel:${service.phone}`}
                          className="py-2 px-4 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors text-sm font-medium"
                        >
                          Call
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </TabsContent>
          ))}
        </Tabs>

        {/* Quick Access */}
        <div className="bg-purple-50 rounded-2xl p-4 space-y-3">
          <h3 className="font-semibold text-gray-900">🔗 Quick Links</h3>
          <div className="grid grid-cols-2 gap-2">
            <a
              href="https://www.immigration.go.ke"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-3 bg-white rounded-xl hover:shadow-md transition-shadow"
            >
              <Globe className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-medium text-gray-700">Immigration</span>
            </a>
            <a
              href="https://www.safaricom.co.ke"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-3 bg-white rounded-xl hover:shadow-md transition-shadow"
            >
              <Wifi className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-medium text-gray-700">Internet</span>
            </a>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
}
