import { useState } from 'react';
import { Music, X } from 'lucide-react';

export default function Footer() {
  const [modalContent, setModalContent] = useState<'privacy' | 'terms' | null>(null);

  const closeModal = () => setModalContent(null);

  return (
    <footer data-bgcolor="#000000" className="bg-transparent border-t border-white/10 pt-20 pb-10 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <div className="flex items-center gap-3 mb-8 md:mb-0">
            <img 
              src="https://raw.githubusercontent.com/eloibalabem/diamondmusic/main/logo%20diamond%20(webp).webp" 
              alt="Diamond Music Logo" 
              className="h-20 w-auto object-contain relative z-10" 
            />
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              { name: 'Sobre', link: '#about' },
              { name: 'Liderança', link: '#leadership' },
              { name: 'Serviços', link: '#services' },
              { name: 'Artistas', link: '#international-artists' },
              { name: 'Eventos', link: '#events' },
              { name: 'Experiência', link: '#experience' },
              { name: 'Depoimentos', link: '#testimonials' },
              { name: 'Contato', link: '#contact' }
            ].map((item) => (
              <a key={item.name} href={item.link} className="text-sm uppercase tracking-widest text-gray-400 hover:text-neon-pink transition-colors clickable">
                {item.name}
              </a>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-gray-600 uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} Diamond Music. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <button onClick={() => setModalContent('privacy')} className="hover:text-white transition-colors uppercase tracking-wider">Política de Privacidade</button>
            <button onClick={() => setModalContent('terms')} className="hover:text-white transition-colors uppercase tracking-wider">Termos de Serviço</button>
          </div>
        </div>
      </div>

      {/* Modals */}
      {modalContent && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-deep-black border border-white/10 rounded-2xl p-8 max-w-3xl w-full relative shadow-[0_0_50px_rgba(255,0,122,0.15)] animate-fade-in-up max-h-[90vh] overflow-y-auto">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-neon-pink transition-colors sticky float-right"
            >
              <X className="w-6 h-6" />
            </button>
            
            <h3 className="text-2xl font-display font-bold text-white mb-6">
              {modalContent === 'privacy' ? 'Política de Privacidade' : 'Termos de Serviço'}
            </h3>
            
            <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
              {modalContent === 'privacy' ? (
                <>
                  <p>A Diamond Music valoriza a sua privacidade e está comprometida em proteger os seus dados pessoais. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos as informações que você nos fornece ao utilizar nosso site e nossos serviços.</p>
                  
                  <h4 className="text-neon-pink font-bold mt-6 mb-2 text-base">1. Coleta de Dados Pessoais</h4>
                  <p>Coletamos informações que você nos fornece diretamente, como nome, e-mail, número de telefone e detalhes da empresa ao preencher formulários de contato, assinar nossa newsletter ou solicitar orçamentos. Também podemos coletar dados automaticamente, como endereço IP, tipo de navegador, páginas visitadas e tempo gasto no site, por meio de cookies e tecnologias semelhantes.</p>
                  
                  <h4 className="text-neon-pink font-bold mt-6 mb-2 text-base">2. Uso das Informações</h4>
                  <p>Os dados coletados são utilizados exclusivamente para:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Responder a suas consultas e fornecer os serviços solicitados;</li>
                    <li>Enviar comunicações de marketing, novidades sobre eventos e ofertas (desde que você tenha consentido);</li>
                    <li>Melhorar a experiência do usuário e otimizar o desempenho do nosso site;</li>
                    <li>Cumprir obrigações legais e regulatórias.</li>
                  </ul>
                  
                  <h4 className="text-neon-pink font-bold mt-6 mb-2 text-base">3. Compartilhamento de Dados</h4>
                  <p>A Diamond Music não vende, aluga ou comercializa seus dados pessoais para terceiros. Podemos compartilhar suas informações apenas com parceiros de confiança e prestadores de serviços que nos auxiliam na operação do site e na execução de nossos serviços (ex: plataformas de e-mail marketing, provedores de hospedagem), sempre sob rígidos acordos de confidencialidade.</p>
                  
                  <h4 className="text-neon-pink font-bold mt-6 mb-2 text-base">4. Segurança dos Dados</h4>
                  <p>Implementamos medidas técnicas e organizacionais de segurança, seguindo os padrões da indústria, para proteger seus dados contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, ressaltamos que nenhuma transmissão de dados pela internet é 100% segura.</p>
                  
                  <h4 className="text-neon-pink font-bold mt-6 mb-2 text-base">5. Seus Direitos (LGPD)</h4>
                  <p>De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem o direito de:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Confirmar a existência de tratamento de seus dados;</li>
                    <li>Acessar, corrigir ou atualizar seus dados incompletos ou inexatos;</li>
                    <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários;</li>
                    <li>Revogar o consentimento a qualquer momento.</li>
                  </ul>
                  <p>Para exercer seus direitos, entre em contato conosco através dos canais oficiais disponibilizados no site.</p>
                </>
              ) : (
                <>
                  <p>Bem-vindo à Diamond Music. Ao acessar e utilizar nosso site e serviços, você concorda em cumprir e ficar vinculado aos seguintes Termos de Serviço. Leia-os cuidadosamente antes de prosseguir.</p>
                  
                  <h4 className="text-neon-purple font-bold mt-6 mb-2 text-base">1. Aceitação dos Termos</h4>
                  <p>A utilização deste site e a contratação de nossos serviços implicam na aceitação integral e incondicional destes Termos de Serviço. Se você não concorda com qualquer parte destes termos, não deve utilizar nosso site ou serviços.</p>
                  
                  <h4 className="text-neon-purple font-bold mt-6 mb-2 text-base">2. Descrição dos Serviços</h4>
                  <p>A Diamond Music é uma agência especializada na produção de eventos, shows, festivais e agenciamento artístico. As informações apresentadas no site têm caráter informativo. A contratação efetiva de qualquer serviço estará sujeita à assinatura de um contrato específico, que detalhará escopo, valores, prazos e responsabilidades de ambas as partes.</p>
                  
                  <h4 className="text-neon-purple font-bold mt-6 mb-2 text-base">3. Propriedade Intelectual</h4>
                  <p>Todo o conteúdo presente neste site, incluindo, mas não se limitando a, textos, gráficos, logotipos, ícones, imagens, clipes de áudio, downloads digitais e compilações de dados, é de propriedade exclusiva da Diamond Music ou de seus fornecedores de conteúdo, sendo protegido pelas leis de direitos autorais e propriedade intelectual brasileiras e internacionais. É estritamente proibida a reprodução, modificação, distribuição ou uso não autorizado de qualquer material sem o consentimento prévio e por escrito da Diamond Music.</p>
                  
                  <h4 className="text-neon-purple font-bold mt-6 mb-2 text-base">4. Uso Aceitável do Site</h4>
                  <p>Você concorda em utilizar o site apenas para fins lícitos e de maneira que não infrinja os direitos de terceiros, nem restrinja ou iniba o uso e aproveitamento do site por qualquer outra pessoa. É proibido o uso do site para transmitir material difamatório, ofensivo, obsceno ou que constitua uma violação de segurança (como tentativas de hacking ou disseminação de vírus).</p>
                  
                  <h4 className="text-neon-purple font-bold mt-6 mb-2 text-base">5. Limitação de Responsabilidade</h4>
                  <p>A Diamond Music envida seus melhores esforços para garantir que as informações no site sejam precisas e atualizadas. No entanto, não garantimos a exatidão, integridade ou atualidade do conteúdo. Não nos responsabilizamos por quaisquer danos diretos, indiretos, incidentais ou consequentes resultantes do uso ou da incapacidade de usar o site, ou de qualquer informação nele contida. Em relação aos eventos produzidos, a responsabilidade da Diamond Music limita-se ao escopo definido nos contratos individuais de prestação de serviços.</p>
                  
                  <h4 className="text-neon-purple font-bold mt-6 mb-2 text-base">6. Modificações dos Termos</h4>
                  <p>Reservamo-nos o direito de alterar, modificar ou atualizar estes Termos de Serviço a qualquer momento, sem aviso prévio. O uso contínuo do site após a publicação de quaisquer alterações constitui aceitação dos novos termos. Recomendamos que você revise esta página periodicamente.</p>
                </>
              )}
            </div>
            
            <button 
              onClick={closeModal}
              className="mt-8 px-6 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full text-white text-sm font-bold uppercase tracking-widest transition-all"
            >
              Entendi e Aceito
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}
