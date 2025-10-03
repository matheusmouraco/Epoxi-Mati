
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle, Layers, Target, BookOpen, MessageSquare, Search, Award, Smartphone, HardHat, PaintRoller, XCircle, MapPin, Building, Users } from 'lucide-react';
import { Toaster } from "@/components/ui/toaster";

export default function Home() {

  const whatsappLink = "https://wa.me/5511992644010?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Mati%20Studio%20e%20quero%20um%20or%C3%A7amento%20para%20site%20de%20aplicador%20de%20ep%C3%B3xi.";

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const portfolioCases = [
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/8cf153928_CapturadeTela2025-08-05as125803AM.png",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/be3913e62_CapturadeTela2025-08-05as125813AM.png",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/acab2da02_CapturadeTela2025-08-05as125823AM.png",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/745a85e72_CapturadeTela2025-08-05as125833AM.png",
  ];

  return (
    <>
      <Toaster />
      <style>{`
        .hero-bg {
          background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6c5c6c1e4_image.png');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }
        .cta-bg {
          background-image: linear-gradient(to top, rgba(255, 0, 77, 0.1), transparent);
        }
        .final-cta-bg {
           background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/ceda4ee1f_image.png');
           background-size: cover;
           background-position: center;
        }
      `}</style>
      
      <header className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm shadow-md z-40 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/1dd374859_Group-1171276258.png" alt="Mati Studio Logo" className="h-10" />
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#FF004D] hover:bg-[#D90042] text-white rounded-full group px-6">
                Fale com um Especialista
                <MessageSquare className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </header>

      <main className="bg-black text-zinc-200 pt-[68px]">
        {/* Hero Section */}
        <section className="hero-bg">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24 md:py-36">
            <motion.div variants={fadeIn} initial="hidden" animate="visible">
              <Layers className="w-16 h-16 text-[#FF004D] mx-auto mb-4"/>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Seu trabalho transforma pisos. Seu site precisa transformar sua visibilidade.
              </h1>
              <p className="mt-6 text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto">
                Você aplica com técnica e excelência. A Mati Studio aplica estratégia, design e posicionamento digital para fazer seu trabalho ser visto, desejado e contratado.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
             <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">Todos os dias, centenas de pessoas pesquisam por você. Elas só não sabem o seu nome.</h2>
             <p className="mt-6 text-lg text-zinc-400 max-w-3xl mx-auto">"Aplicação de epóxi em garagem", "piso industrial", "revestimento para quadra". A pergunta é: estão encontrando você — ou o seu concorrente?</p>
          </div>
        </section>
        
        {/* What your site will do */}
        <section className="py-20 bg-black">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">O que um site profissional pode fazer por você:</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {icon: Layers, text: "Apresentar seus serviços com clareza e impacto visual"},
                        {icon: Search, text: "Ser encontrado por clientes na sua cidade e região"},
                        {icon: Smartphone, text: "Aumentar pedidos via WhatsApp e formulários"},
                        {icon: Award, text: "Gerar autoridade e confiança antes do primeiro contato"},
                        {icon: HardHat, text: "Valorizar seu trabalho técnico com fotos e credibilidade"},
                        {icon: MessageSquare, text: "Trabalhar por você todos os dias, 24h por dia"},
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-4 bg-zinc-900 p-6 rounded-lg border border-zinc-800">
                            <div className="flex-shrink-0 w-12 h-12 bg-black rounded-full flex items-center justify-center">
                                <item.icon className="w-6 h-6 text-[#FF004D]"/>
                            </div>
                            <p className="text-zinc-300 mt-2">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Target Audience */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-2">Ideal para:</h2>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                  {["Aplicadores autônomos", "Empresas de pisos industriais", "Especialistas em epóxi e PU", "Representantes e revendedores"].map(specialty => (
                      <div key={specialty} className="bg-zinc-800 text-zinc-200 rounded-full px-5 py-2 text-md font-medium flex items-center gap-2">
                        <PaintRoller className="w-4 h-4 text-[#FF004D]"/> {specialty}
                      </div>
                  ))}
              </div>
          </div>
        </section>

        {/* Services Structure */}
        <section className="py-20 bg-black">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-center text-4xl font-bold text-white mb-12">O que entregamos para o seu negócio</h2>
                <div className="grid md:grid-cols-2 gap-10">
                    <Card className="bg-zinc-900 border-zinc-800 text-white p-6 md:p-8">
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <Building className="w-12 h-12 text-[#FF004D] shrink-0"/>
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Site Profissional Completo</h3>
                                <ul className="space-y-2 list-disc list-inside text-zinc-300">
                                    <li>Página inicial com foco em diferenciação</li>
                                    <li>Galeria de fotos (antes e depois)</li>
                                    <li>Página de especialidades e serviços</li>
                                    <li>Página "Sobre" com sua história</li>
                                    <li>Integração com WhatsApp e mapa</li>
                                    <li>SEO local para pesquisas na região</li>
                                </ul>
                            </div>
                        </div>
                    </Card>
                    <Card className="bg-zinc-900 border-zinc-800 text-white p-6 md:p-8">
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <Target className="w-12 h-12 text-[#FF004D] shrink-0"/>
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Landing Pages de Campanhas</h3>
                                <ul className="space-y-2 list-disc list-inside text-zinc-300">
                                    <li>Foco em epóxi para garagens</li>
                                    <li>Pisos para indústrias ou comércios</li>
                                    <li>Revestimentos decorativos</li>
                                    <li>Promoções em cidades específicas</li>
                                    <li>Estrutura enxuta e feita para converter</li>
                                    <li>Ideal para anúncios no Google e Instagram</li>
                                </ul>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>

         {/* Comparison Section */}
        <section id="comparison" className="py-20 bg-zinc-900">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white">Site amador vs. Site profissional da Mati Studio</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8 text-left">
                    <div className="bg-zinc-800 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-red-400 mb-4">Problemas Comuns</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2"><XCircle className="w-5 h-5 text-red-400 mt-0.5 shrink-0"/>Fotos soltas e desorganizadas</li>
                            <li className="flex items-start gap-2"><XCircle className="w-5 h-5 text-red-400 mt-0.5 shrink-0"/>Site lento e sem presença no Google</li>
                            <li className="flex items-start gap-2"><XCircle className="w-5 h-5 text-red-400 mt-0.5 shrink-0"/>Contato difícil ou escondido</li>
                            <li className="flex items-start gap-2"><XCircle className="w-5 h-5 text-red-400 mt-0.5 shrink-0"/>Layout genérico e ultrapassado</li>
                            <li className="flex items-start gap-2"><XCircle className="w-5 h-5 text-red-400 mt-0.5 shrink-0"/>Foco apenas institucional</li>
                        </ul>
                    </div>
                    <div className="bg-zinc-800 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-green-400 mb-4">Soluções da Mati Studio</h3>
                        <ul className="space-y-3">
                           <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-400 mt-0.5 shrink-0"/>Galeria de portfólio com impacto visual</li>
                           <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-400 mt-0.5 shrink-0"/>SEO otimizado e carregamento rápido</li>
                           <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-400 mt-0.5 shrink-0"/>Botões visíveis e integração com WhatsApp</li>
                           <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-400 mt-0.5 shrink-0"/>Design moderno, técnico e sob medida</li>
                           <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-400 mt-0.5 shrink-0"/>Estrutura para gerar orçamentos qualificados</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Conheça alguns projetos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioCases.map((src, i) => (
                <motion.div 
                  key={i} 
                  className="rounded-lg overflow-hidden shadow-lg border border-zinc-700/50"
                  variants={fadeIn} 
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{delay: i * 0.1}}
                >
                  <img src={src} alt={`Portfolio case ${i + 1}`} className="w-full h-auto object-cover aspect-video"/>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta-bg">
          <div className="py-24 text-center bg-black/70">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-white">Você já aplica com técnica. Agora é hora de aplicar estratégia.</h2>
                <p className="mt-6 text-lg text-zinc-300 max-w-2xl mx-auto">Com um site profissional, você será visto, lembrado e preferido. Vamos transformar sua visibilidade — e seu faturamento.</p>
                <div className="mt-10">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="w-full sm:w-auto bg-[#FF004D] hover:bg-[#D90042] text-white rounded-full text-lg px-10 py-6 font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                      Pedir meu orçamento
                    </Button>
                  </a>
                </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black border-t border-zinc-800">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-zinc-500">
          <p>&copy; {new Date().getFullYear()} Mati Studio | Sites e landing pages que transformam sua visibilidade.</p>
        </div>
      </footer>
    </>
  );
}
