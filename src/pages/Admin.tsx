
import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { toast } from '@/hooks/use-toast';
import { Plus, Package, TrendingUp, Users, DollarSign } from 'lucide-react';

const Admin = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: '',
    description: '',
    image: '',
    inStock: true,
    featured: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.price || !formData.category || !formData.description) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    // Simulate adding product
    toast({
      title: "Produto adicionado!",
      description: `${formData.name} foi adicionado ao catálogo com sucesso.`,
    });

    // Reset form
    setFormData({
      name: '',
      price: '',
      category: '',
      description: '',
      image: '',
      inStock: true,
      featured: false,
    });
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const stats = [
    {
      title: 'Total de Produtos',
      value: '127',
      icon: Package,
      change: '+12%',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Vendas Mensais',
      value: 'R$ 45.2K',
      icon: DollarSign,
      change: '+23%',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Clientes Ativos',
      value: '1,234',
      icon: Users,
      change: '+8%',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Taxa de Conversão',
      value: '3.2%',
      icon: TrendingUp,
      change: '+1.1%',
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-gray-50 dark:bg-gray-900">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-center mb-4">
              Painel Administrativo
            </h1>
            <p className="text-xl text-center text-purple-100">
              Gerencie produtos e monitore vendas
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <Card key={stat.title} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">{stat.title}</p>
                        <p className="text-2xl font-bold">{stat.value}</p>
                        <p className="text-sm text-green-600">{stat.change}</p>
                      </div>
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Add Product Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Plus className="w-5 h-5 mr-2" />
                    Adicionar Novo Produto
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Nome do Produto *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Ex: Guitarra Stratocaster"
                        />
                      </div>
                      <div>
                        <Label htmlFor="price">Preço (R$) *</Label>
                        <Input
                          id="price"
                          type="number"
                          step="0.01"
                          value={formData.price}
                          onChange={(e) => handleInputChange('price', e.target.value)}
                          placeholder="0.00"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="category">Categoria *</Label>
                      <Select 
                        value={formData.category} 
                        onValueChange={(value) => handleInputChange('category', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione uma categoria" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="guitar">Guitarra</SelectItem>
                          <SelectItem value="bass">Baixo</SelectItem>
                          <SelectItem value="drums">Bateria</SelectItem>
                          <SelectItem value="keyboard">Teclado</SelectItem>
                          <SelectItem value="accessories">Acessórios</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="description">Descrição *</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => handleInputChange('description', e.target.value)}
                        placeholder="Descreva o produto detalhadamente..."
                        rows={4}
                      />
                    </div>

                    <div>
                      <Label htmlFor="image">URL da Imagem</Label>
                      <Input
                        id="image"
                        value={formData.image}
                        onChange={(e) => handleInputChange('image', e.target.value)}
                        placeholder="https://exemplo.com/imagem.jpg"
                      />
                    </div>

                    <div className="flex items-center space-x-8">
                      <div className="flex items-center space-x-2">
                        <Switch
                          id="inStock"
                          checked={formData.inStock}
                          onCheckedChange={(checked) => handleInputChange('inStock', checked)}
                        />
                        <Label htmlFor="inStock">Em Estoque</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch
                          id="featured"
                          checked={formData.featured}
                          onCheckedChange={(checked) => handleInputChange('featured', checked)}
                        />
                        <Label htmlFor="featured">Produto em Destaque</Label>
                      </div>
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      <Plus className="w-4 h-4 mr-2" />
                      Adicionar Produto
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Ações Rápidas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full" variant="outline">
                    Ver Todos os Produtos
                  </Button>
                  <Button className="w-full" variant="outline">
                    Gerenciar Estoque
                  </Button>
                  <Button className="w-full" variant="outline">
                    Relatório de Vendas
                  </Button>
                  <Button className="w-full" variant="outline">
                    Configurações da Loja
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Vendas Recentes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { product: 'Guitarra Les Paul', price: 'R$ 3.500' },
                      { product: 'Baixo Jazz Bass', price: 'R$ 1.800' },
                      { product: 'Pedal de Distorção', price: 'R$ 350' },
                    ].map((sale, index) => (
                      <div key={index} className="flex justify-between items-center p-2 bg-muted/50 rounded">
                        <span className="text-sm">{sale.product}</span>
                        <span className="text-sm font-semibold text-green-600">{sale.price}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Admin;
