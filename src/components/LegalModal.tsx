import React from 'react';
import { X, ShieldCheck, EnvelopeSimple, Phone, MapPin, FileText } from '@phosphor-icons/react';

interface LegalModalProps {
  type: 'terms' | 'privacy' | 'support' | 'contact' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-[#0E1E31] border border-[#1D3B5A] rounded-3xl shadow-2xl p-6 sm:p-8 text-white">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          id="legal-modal-close-btn"
          aria-label="Fechar janela"
          className="absolute top-4 right-4 p-2 rounded-full bg-[#132A40] text-[#E8D5A8] hover:text-[#0B1726] hover:bg-[#D6A84F] transition-colors border border-[#1D3B5A] cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content based on type */}
        {type === 'terms' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#D6A84F] font-bold text-xs uppercase tracking-wider font-mono">
              <FileText className="w-4 h-4" />
              Documento Legal
            </div>
            <h3 className="text-2xl font-extrabold text-white">
              Termos de Uso
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-[#F7F4EC]/90 leading-relaxed border-t border-[#1D3B5A] pt-4">
              <p>
                <strong>1. Objeto:</strong> O curso digital "Prospere de Onde Está", ministrado pelo Professor R. Costa, destina-se ao desenvolvimento pessoal, reflexão sobre tomada de decisões, reestruturação comportamental e construção de trajetória.
              </p>
              <p>
                <strong>2. Acesso e Licença:</strong> A inscrição concede uma licença de uso individual, pessoal e intransferível pelo período de 12 meses. O compartilhamento de credenciais de acesso é estritamente proibido.
              </p>
              <p>
                <strong>3. Isenção de Promessas Milagrosas:</strong> Conforme explicitado nos módulos do curso, não há garantia de enriquecimento fácil ou resultados automáticos sem participação ativa, estudo e aplicação prática dos ensinamentos pelo próprio aluno.
              </p>
              <p>
                <strong>4. Garantia Legal e Incondicional:</strong> O aluno tem o direito de solicitar o reembolso integral dos valores pagos em até 7 (sete) dias corridos a partir da data de confirmação do pagamento.
              </p>
            </div>
          </div>
        )}

        {type === 'privacy' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#D6A84F] font-bold text-xs uppercase tracking-wider font-mono">
              <ShieldCheck className="w-4 h-4" />
              Segurança e Privacidade
            </div>
            <h3 className="text-2xl font-extrabold text-white">
              Política de Privacidade (LGPD)
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-[#F7F4EC]/90 leading-relaxed border-t border-[#1D3B5A] pt-4">
              <p>
                <strong>1. Coleta de Dados:</strong> Coletamos apenas as informações estritamente necessárias para a emissão de nota fiscal, liberação do acesso à plataforma de aulas e envio de comunicações operacionais.
              </p>
              <p>
                <strong>2. Segurança e Criptografia:</strong> Todos os dados transmitidos em nosso ambiente são protegidos por protocolo SSL com criptografia de 256 bits.
              </p>
              <p>
                <strong>3. Não Compartilhamento:</strong> Não comercializamos nem repassamos seus dados cadastrais para terceiros sem sua expressa autorização.
              </p>
            </div>
          </div>
        )}

        {type === 'support' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#D6A84F] font-bold text-xs uppercase tracking-wider font-mono">
              <EnvelopeSimple className="w-4 h-4" />
              Atendimento ao Aluno
            </div>
            <h3 className="text-2xl font-extrabold text-white">
              Suporte & Dúvidas
            </h3>
            <div className="space-y-4 text-xs sm:text-sm text-[#F7F4EC]/90 border-t border-[#1D3B5A] pt-4">
              <p>
                Nossa equipe pedagógica e de suporte técnico está disponível de segunda a sexta-feira, das 09h às 18h (Horário de Brasília).
              </p>
              <div className="p-4 rounded-xl bg-[#0B1726] border border-[#1D3B5A] space-y-2">
                <div className="flex items-center gap-2 text-white font-medium">
                  <EnvelopeSimple className="w-4 h-4 text-[#D6A84F]" />
                  <span>suporte@prosperecosta.com.br</span>
                </div>
                <div className="flex items-center gap-2 text-white font-medium">
                  <Phone className="w-4 h-4 text-[#D6A84F]" />
                  <span>WhatsApp: (11) 98765-4321</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {type === 'contact' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#D6A84F] font-bold text-xs uppercase tracking-wider font-mono">
              <MapPin className="w-4 h-4" />
              Informações Institucionais
            </div>
            <h3 className="text-2xl font-extrabold text-white">
              Contato & Empresa
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-[#F7F4EC]/90 border-t border-[#1D3B5A] pt-4">
              <p>
                <strong>Razão Social:</strong> Costa Educação & Desenvolvimento Humano Ltda.
              </p>
              <p>
                <strong>CNPJ:</strong> 45.123.890/0001-12
              </p>
              <p>
                <strong>Sede:</strong> Av. Paulista, 1000, Bela Vista — São Paulo/SP, CEP 01310-100
              </p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
