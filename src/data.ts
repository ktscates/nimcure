type Patient = {
  hospital_id: string;
  first_name: string;
  last_name: string;
  gender: "Male" | "Female";
  phone_number: string;
  next_delivery_date: string;
  status: "completed" | "due & paid" | "due & unpaid" | "assigned";
  delivery_area: string;
  location: string;
  delivery_address: string;
  email: string;
};

// data/patients.ts
const patients: Patient[] = [
  {
    hospital_id: "8IWATQGO",
    first_name: "Danielle",
    last_name: "Lee",
    phone_number: "+234-803-655-7098",
    next_delivery_date: "2025-06-27",
    gender: "Female",
    delivery_area: "Victoria Island, Lagos",
    location: "VI, Lagos",
    delivery_address: "123 Victoria Island, Lagos, Nigeria",
    status: "completed",
    email: "danielle.lee@example.com",
  },
  {
    hospital_id: "W9P5YZOP",
    first_name: "John",
    last_name: "Doe",
    phone_number: "+234-703-915-1234",
    next_delivery_date: "2025-07-01",
    gender: "Male",
    delivery_area: "Garki, Abuja",
    location: "Garki, Abuja",
    delivery_address: "456 Garki, Abuja, Nigeria",
    status: "due & paid",
    email: "john.doe@example.com",
  },
  {
    hospital_id: "JK8K3DLO",
    first_name: "Chioma",
    last_name: "Okafor",
    phone_number: "+234-703-813-8456",
    next_delivery_date: "2025-08-15",
    gender: "Female",
    delivery_area: "Ogui Road, Enugu",
    location: "Enugu City, Enugu",
    delivery_address: "789 Ogui Road, Enugu, Nigeria",
    status: "due & unpaid",
    email: "chioma.okafor@example.com",
  },
  {
    hospital_id: "V7H8QWL0",
    first_name: "Adebayo",
    last_name: "Femi",
    phone_number: "+234-806-456-7890",
    next_delivery_date: "2025-09-22",
    gender: "Male",
    delivery_area: "Agbowo, Ibadan",
    location: "Ibadan City, Oyo",
    delivery_address: "12 Agbowo, Ibadan, Nigeria",
    status: "assigned",
    email: "adebayo.femi@example.com",
  },
  {
    hospital_id: "C9Y3XSKD",
    first_name: "Seyi",
    last_name: "Bello",
    phone_number: "+234-811-345-6789",
    next_delivery_date: "2025-10-05",
    gender: "Female",
    delivery_area: "Nassarawa, Kano",
    location: "Kano City, Kano",
    delivery_address: "23 Nassarawa, Kano, Nigeria",
    status: "completed",
    email: "seyi.bello@example.com",
  },
  {
    hospital_id: "S1J0F8WQ",
    first_name: "Uche",
    last_name: "Eze",
    phone_number: "+234-810-876-1234",
    next_delivery_date: "2025-11-18",
    gender: "Male",
    delivery_area: "Trans-Amadi, Port Harcourt",
    location: "Port Harcourt, Rivers",
    delivery_address: "456 Trans-Amadi, Port Harcourt, Nigeria",
    status: "due & paid",
    email: "uche.eze@example.com",
  },
  {
    hospital_id: "L8H2U9YN",
    first_name: "Ngozi",
    last_name: "Okoro",
    phone_number: "+234-810-567-8901",
    next_delivery_date: "2025-12-01",
    gender: "Female",
    delivery_area: "IBB Way, Calabar",
    location: "Calabar, Cross River",
    delivery_address: "89 IBB Way, Calabar, Nigeria",
    status: "due & unpaid",
    email: "ngozi.okoro@example.com",
  },
  {
    hospital_id: "M4N7K3OH",
    first_name: "Chijioke",
    last_name: "Ugwu",
    phone_number: "+234-803-654-3210",
    next_delivery_date: "2026-01-15",
    gender: "Male",
    delivery_area: "Sabon Gari, Kaduna",
    location: "Kaduna City, Kaduna",
    delivery_address: "12 Sabon Gari, Kaduna, Nigeria",
    status: "assigned",
    email: "chijioke.ugwu@example.com",
  },
  {
    hospital_id: "N8S9V4WX",
    first_name: "Bola",
    last_name: "Johnson",
    phone_number: "+234-701-234-5678",
    next_delivery_date: "2026-02-10",
    gender: "Female",
    delivery_area: "Lekki Phase 1, Lagos",
    location: "Lekki, Lagos",
    delivery_address: "98 Lekki Phase 1, Lagos, Nigeria",
    status: "completed",
    email: "bola.johnson@example.com",
  },
  {
    hospital_id: "P4J5B2TL",
    first_name: "Tolu",
    last_name: "Alabi",
    phone_number: "+234-705-987-6543",
    next_delivery_date: "2026-03-20",
    gender: "Male",
    delivery_area: "Ijemo, Abeokuta",
    location: "Abeokuta, Ogun",
    delivery_address: "88 Ijemo, Abeokuta, Nigeria",
    status: "due & paid",
    email: "tolu.alabi@example.com",
  },
  {
    hospital_id: "Q3O0K5NE",
    first_name: "Micheal",
    last_name: "Obi",
    phone_number: "+234-701-987-1234",
    next_delivery_date: "2026-04-14",
    gender: "Male",
    delivery_area: "Alhaji Road, Ilorin",
    location: "Ilorin, Kwara",
    delivery_address: "112 Alhaji Road, Ilorin, Nigeria",
    status: "due & unpaid",
    email: "micheal.obi@example.com",
  },
  {
    hospital_id: "R7E1B3OM",
    first_name: "Emeka",
    last_name: "Nwosu",
    phone_number: "+234-705-123-4567",
    next_delivery_date: "2026-05-01",
    gender: "Male",
    delivery_area: "Jos Road, Jos",
    location: "Jos, Plateau",
    delivery_address: "24 Jos Road, Jos, Nigeria",
    status: "assigned",
    email: "emeka.nwosu@example.com",
  },
  {
    hospital_id: "T2G8A6PZ",
    first_name: "Sarah",
    last_name: "Peters",
    phone_number: "+234-704-543-7890",
    next_delivery_date: "2026-06-15",
    gender: "Female",
    delivery_area: "Husseini Street, Maiduguri",
    location: "Maiduguri, Borno",
    delivery_address: "56 Husseini Street, Maiduguri, Nigeria",
    status: "completed",
    email: "sarah.peters@example.com",
  },
];

export default patients;
