
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Music, Award, Users, Truck } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Music,
      title: 'Paixão pela Música',
      description: 'Somos apaixonados por música e dedicados a fornecer os melhores instrumentos para músicos de todos os níveis.',
    },
    {
      icon: Award,
      title: 'Qualidade Garantida',
      description: 'Todos os nossos produtos passam por rigoroso controle de qualidade e vêm com garantia completa.',
    },
    {
      icon: Users,
      title: 'Atendimento Especializado',
      description: 'Nossa equipe é formada por músicos experientes prontos para ajudar você a encontrar o instrumento ideal.',
    },
    {
      icon: Truck,
      title: 'Entrega Rápida',
      description: 'Enviamos para todo o Brasil com frete grátis e entrega rápida e segura.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-center mb-4">
              Sobre a LuthStore
            </h1>
            <p className="text-xl text-center text-purple-100">
              Conheça nossa história e nossa missão
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Story Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Nossa História</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  A LuthStore nasceu da paixão pela música e do desejo de democratizar o acesso
                  a instrumentos musicais de qualidade. Fundada em 2020, começamos como uma
                  pequena loja especializada em guitarras artesanais.
                </p>
                <p>
                  Hoje, somos uma das principais lojas online de instrumentos musicais do Brasil,
                  oferecendo uma ampla variedade de produtos para músicos iniciantes e profissionais.
                </p>
                <p>
                  Nossa missão é conectar pessoas à música através de instrumentos excepcionais
                  e um atendimento que vai além da venda - oferecemos uma experiência completa
                  para cada cliente.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/placeholder.svg"
                alt="Nossa equipe"
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>

          {/* Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Por que escolher a LuthStore?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stats */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">5000+</div>
                <div className="text-purple-100">Clientes Satisfeitos</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-purple-100">Produtos em Estoque</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-purple-100">Marcas Parceiras</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">4</div>
                <div className="text-purple-100">Anos de Experiência</div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-6">Entre em Contato</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Tem alguma dúvida ou sugestão? Nossa equipe está sempre pronta para ajudar.
              Entre em contato conosco através dos canais abaixo.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">contato@luthstore.com</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Telefone</h3>
                <p className="text-muted-foreground">(11) 99999-9999</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">WhatsApp</h3>
                <p className="text-muted-foreground">(11) 88888-8888</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
