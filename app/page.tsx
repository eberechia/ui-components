"use client";

import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { StatCard } from '@/components/ui/stat-card';
import { ChartCard } from '@/components/ui/chart-card';
import { DataTable } from '@/components/ui/data-table';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  DollarSign, 
  ShoppingCart, 
  TrendingUp,
  Calendar,
  Clock
} from 'lucide-react';

// Sample data
const salesData = [
  { month: 'Jan', sales: 4000 },
  { month: 'Feb', sales: 3000 },
  { month: 'Mar', sales: 5000 },
  { month: 'Apr', sales: 4500 },
  { month: 'May', sales: 6000 },
  { month: 'Jun', sales: 5500 },
];

const revenueData = [
  { month: 'Jan', revenue: 12000 },
  { month: 'Feb', revenue: 15000 },
  { month: 'Mar', revenue: 18000 },
  { month: 'Apr', revenue: 16000 },
  { month: 'May', revenue: 22000 },
  { month: 'Jun', revenue: 25000 },
];

const recentOrders = [
  {
    id: '#12345',
    customer: 'John Doe',
    product: 'Premium Plan',
    amount: '$99.00',
    status: 'completed',
    date: '2024-01-15'
  },
  {
    id: '#12346',
    customer: 'Jane Smith',
    product: 'Basic Plan',
    amount: '$29.00',
    status: 'pending',
    date: '2024-01-14'
  },
  {
    id: '#12347',
    customer: 'Mike Johnson',
    product: 'Pro Plan',
    amount: '$59.00',
    status: 'completed',
    date: '2024-01-13'
  },
  {
    id: '#12348',
    customer: 'Sarah Wilson',
    product: 'Premium Plan',
    amount: '$99.00',
    status: 'failed',
    date: '2024-01-12'
  },
];

const orderColumns = [
  { key: 'id', label: 'Order ID' },
  { key: 'customer', label: 'Customer' },
  { key: 'product', label: 'Product' },
  { key: 'amount', label: 'Amount' },
  { 
    key: 'status', 
    label: 'Status',
    render: (value: string) => (
      <Badge 
        variant={
          value === 'completed' ? 'default' : 
          value === 'pending' ? 'secondary' : 
          'destructive'
        }
      >
        {value}
      </Badge>
    )
  },
  { 
    key: 'date', 
    label: 'Date',
    render: (value: string) => (
      <div className="flex items-center gap-2">
        <Calendar className="h-4 w-4 text-gray-400" />
        {value}
      </div>
    )
  },
];

export default function Home() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Page header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your business today.</p>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Users"
            value="12,345"
            change="+12% from last month"
            changeType="positive"
            icon={Users}
          />
          <StatCard
            title="Revenue"
            value="$45,678"
            change="+8% from last month"
            changeType="positive"
            icon={DollarSign}
          />
          <StatCard
            title="Orders"
            value="1,234"
            change="-3% from last month"
            changeType="negative"
            icon={ShoppingCart}
          />
          <StatCard
            title="Growth Rate"
            value="23.5%"
            change="+5% from last month"
            changeType="positive"
            icon={TrendingUp}
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartCard
            title="Sales Overview"
            data={salesData}
            type="line"
            dataKey="sales"
            xAxisKey="month"
            color="#3b82f6"
          />
          <ChartCard
            title="Revenue Growth"
            data={revenueData}
            type="bar"
            dataKey="revenue"
            xAxisKey="month"
            color="#10b981"
          />
        </div>

        {/* Recent orders table */}
        <DataTable
          title="Recent Orders"
          data={recentOrders}
          columns={orderColumns}
        />
      </div>
    </DashboardLayout>
  );
}