import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  Lock, 
  CreditCard, 
  QrCode, 
  Barcode, 
  CheckCircle, 
  Copy, 
  Check, 
  Certificate,
  ArrowUpRight,
  Sparkle
} from '@phosphor-icons/react';
import { OFFER_DATA } from '../data/courseData';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const [paymentMethod, setPaymentMethod] = useState<'credit_card' | 'pix' | 'boleto'>('pix');
  const [installments, setInstallments] = useState('12');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvv: '',
    cardName: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [copiedPix, setCopiedPix] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsCompleted(true);
    }, 1200);
  };

  const copyPixCode = () => {
    navigator.clipboard.writeText('00020126580014br.gov.bcb.pix0136prospere-professorcosta-transf20265204000053039865404497.005802BR5925PROSPERE DE ONDE ESTA6009SAO PAULO62070503***6304E8A2');
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0E1E31] border border-[#1D3B5A] rounded-3xl shadow-2xl p-6 sm:p-8 text-white">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          id="checkout-modal-close-btn"
          aria-label="Fechar checkout"
          className="absolute top-4 right-4 p-2 rounded-full bg-[#132A40] text-[#E8D5A8] hover:text-[#0B1726] hover:bg-[#D6A84F] transition-colors border border-[#1D3B5A] cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isCompleted ? (
          <div className="space-y-6">
            
            {/* Header */}
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#D6A84F] uppercase tracking-wider">
                <Sparkle className="w-3.5 h-3.5" />
                Matrícula & Acesso Imediato
              </div>
              <h3 className="text-2xl font-extrabold text-white">
                PROSPERE DE ONDE ESTÁ
              </h3>
              <p className="text-xs text-[#E8D5A8]/80">
                Professor R. Costa • Jornada completa em 10 etapas + Bônus
              </p>
            </div>

            {/* Price Badge Summary */}
            <div className="p-4 rounded-xl bg-[#0B1726] border border-[#1D3B5A] flex items-center justify-between">
              <div>
                <span className="text-[11px] text-[#E8D5A8]/70 block font-medium">Investimento:</span>
                <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#F7F4EC] via-[#E8D5A8] to-[#D6A84F]">
                  12x de {OFFER_DATA.pricing.installmentValue}
                </span>
                <span className="text-xs text-[#E8D5A8]/80 block mt-0.5">ou {OFFER_DATA.pricing.cashPrice} à vista</span>
              </div>
              <div className="text-right">
                <span className="inline-flex items-center gap-1 text-[11px] text-[#0B1726] bg-[#D6A84F] px-3 py-1 rounded-full font-bold shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Garantia 7 Dias
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Personal Details */}
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-wider text-[#D6A84F] font-bold block font-mono">
                  1. Seus Dados de Acesso
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="sm:col-span-2">
                    <label className="text-[11px] text-[#F7F4EC] font-medium block mb-1">Nome Completo</label>
                    <input
                      type="text"
                      required
                      placeholder="Seu nome completo"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B1726] border border-[#1D3B5A] text-sm text-white placeholder-[#E8D5A8]/40 focus:outline-none focus:border-[#D6A84F]"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] text-[#F7F4EC] font-medium block mb-1">E-mail (onde receberá o login)</label>
                    <input
                      type="email"
                      required
                      placeholder="seuemail@exemplo.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B1726] border border-[#1D3B5A] text-sm text-white placeholder-[#E8D5A8]/40 focus:outline-none focus:border-[#D6A84F]"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] text-[#F7F4EC] font-medium block mb-1">WhatsApp / Telefone</label>
                    <input
                      type="tel"
                      required
                      placeholder="(11) 99999-9999"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B1726] border border-[#1D3B5A] text-sm text-white placeholder-[#E8D5A8]/40 focus:outline-none focus:border-[#D6A84F]"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method Selector */}
              <div className="space-y-3 pt-2">
                <span className="text-xs uppercase tracking-wider text-[#D6A84F] font-bold block font-mono">
                  2. Forma de Pagamento
                </span>

                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('pix')}
                    className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                      paymentMethod === 'pix'
                        ? 'bg-[#132A40] border-2 border-[#D6A84F] text-white font-bold shadow-lg'
                        : 'bg-[#0B1726] border-[#1D3B5A] text-[#E8D5A8]/70 hover:border-[#D6A84F]/50'
                    }`}
                  >
                    <QrCode className="w-5 h-5 mx-auto mb-1 text-[#D6A84F]" />
                    <span className="text-xs block font-bold text-white">PIX</span>
                    <span className="text-[10px] text-[#D6A84F]">Instantâneo</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('credit_card')}
                    className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                      paymentMethod === 'credit_card'
                        ? 'bg-[#132A40] border-2 border-[#D6A84F] text-white font-bold shadow-lg'
                        : 'bg-[#0B1726] border-[#1D3B5A] text-[#E8D5A8]/70 hover:border-[#D6A84F]/50'
                    }`}
                  >
                    <CreditCard className="w-5 h-5 mx-auto mb-1 text-[#D6A84F]" />
                    <span className="text-xs block font-bold text-white">Cartão</span>
                    <span className="text-[10px] text-[#E8D5A8]/70">Até 12x</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('boleto')}
                    className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                      paymentMethod === 'boleto'
                        ? 'bg-[#132A40] border-2 border-[#D6A84F] text-white font-bold shadow-lg'
                        : 'bg-[#0B1726] border-[#1D3B5A] text-[#E8D5A8]/70 hover:border-[#D6A84F]/50'
                    }`}
                  >
                    <Barcode className="w-5 h-5 mx-auto mb-1 text-[#D6A84F]" />
                    <span className="text-xs block font-bold text-white">Boleto</span>
                    <span className="text-[10px] text-[#E8D5A8]/70">À vista</span>
                  </button>
                </div>

                {/* PIX Details */}
                {paymentMethod === 'pix' && (
                  <div className="p-4 rounded-xl bg-[#0B1726] border border-[#1D3B5A] space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#F7F4EC] font-medium">Valor promocional à vista:</span>
                      <span className="text-base font-bold text-[#D6A84F]">R$ 97,00</span>
                    </div>
                    <div className="p-3 rounded-lg bg-[#132A40] border border-[#1D3B5A] flex items-center justify-between gap-2">
                      <span className="text-[11px] font-mono text-[#E8D5A8]/70 truncate">
                        00020126580014br.gov.bcb.pix...97.00BR
                      </span>
                      <button
                        type="button"
                        onClick={copyPixCode}
                        className="px-3 py-1 bg-gradient-to-r from-[#D6A84F] to-[#B88732] hover:from-[#E8D5A8] hover:to-[#D6A84F] text-[#0B1726] text-xs font-black rounded-md flex items-center gap-1 shrink-0 transition-colors cursor-pointer"
                      >
                        {copiedPix ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                        {copiedPix ? 'Copiado!' : 'Copiar Código'}
                      </button>
                    </div>
                    <p className="text-[11px] text-[#E8D5A8]/80">
                      O acesso é liberado em menos de 2 minutos após o pagamento.
                    </p>
                  </div>
                )}

                {/* Credit Card Inputs */}
                {paymentMethod === 'credit_card' && (
                  <div className="space-y-3 p-4 rounded-xl bg-[#0B1726] border border-[#1D3B5A]">
                    <div>
                      <label className="text-[11px] text-[#F7F4EC] font-medium block mb-1">Número do Cartão</label>
                      <input
                        type="text"
                        placeholder="0000 0000 0000 0000"
                        value={formData.cardNumber}
                        onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#132A40] border border-[#1D3B5A] text-sm text-white placeholder-[#E8D5A8]/40 focus:outline-none focus:border-[#D6A84F]"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-[11px] text-[#F7F4EC] font-medium block mb-1">Validade (MM/AA)</label>
                        <input
                          type="text"
                          placeholder="12/28"
                          value={formData.cardExpiry}
                          onChange={(e) => setFormData({ ...formData, cardExpiry: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg bg-[#132A40] border border-[#1D3B5A] text-sm text-white placeholder-[#E8D5A8]/40 focus:outline-none focus:border-[#D6A84F]"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] text-[#F7F4EC] font-medium block mb-1">CVV</label>
                        <input
                          type="text"
                          placeholder="123"
                          value={formData.cardCvv}
                          onChange={(e) => setFormData({ ...formData, cardCvv: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg bg-[#132A40] border border-[#1D3B5A] text-sm text-white placeholder-[#E8D5A8]/40 focus:outline-none focus:border-[#D6A84F]"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-[11px] text-[#F7F4EC] font-medium block mb-1">Parcelamento</label>
                      <select
                        value={installments}
                        onChange={(e) => setInstallments(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#132A40] border border-[#1D3B5A] text-sm text-white focus:outline-none focus:border-[#D6A84F]"
                      >
                        <option value="12">12x de R$ 9,74 (Recomendado)</option>
                        <option value="6">6x de R$ 17,90</option>
                        <option value="3">3x de R$ 34,50</option>
                        <option value="1">1x de R$ 97,00 à vista</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-4.5 bg-gradient-to-r from-[#D6A84F] to-[#B88732] hover:from-[#E8D5A8] hover:to-[#D6A84F] text-[#0B1726] font-black text-sm uppercase tracking-wider rounded-xl transition-all shadow-xl hover:shadow-yellow-500/20 disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
              >
                {isProcessing ? (
                  <span>Processando Inscrição...</span>
                ) : (
                  <>
                    <span>Confirmar Minha Vaga com Segurança</span>
                    <ArrowUpRight className="w-4 h-4 stroke-[3]" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-4 text-[10px] text-[#E8D5A8]/70 pt-1">
                <span className="flex items-center gap-1">
                  <Lock className="w-3 h-3 text-[#D6A84F]" />
                  Criptografia 256-bit
                </span>
                <span>•</span>
                <span>Garantia 7 Dias</span>
                <span>•</span>
                <span>Acesso Imediato</span>
              </div>

            </form>

          </div>
        ) : (
          /* Confirmation Success State */
          <div className="py-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-[#132A40] text-[#D6A84F] flex items-center justify-center mx-auto border border-[#1D3B5A] shadow-md">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-[#D6A84F] uppercase tracking-wider">
                Inscrição Confirmada!
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Bem-vindo à Sua Nova Trajetória
              </h3>
              <p className="text-sm text-[#F7F4EC]/90 max-w-md mx-auto">
                Enviamos os dados de login e acesso exclusivo à plataforma para o seu e-mail:
                <strong className="text-white block mt-1">{formData.email || 'seu e-mail informado'}</strong>
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#0B1726] border border-[#1D3B5A] text-left max-w-md mx-auto space-y-2 text-xs">
              <div className="flex items-center gap-2 text-[#D6A84F] font-bold">
                <Certificate className="w-4 h-4" />
                Próximos Passos:
              </div>
              <ul className="space-y-1 text-[#F7F4EC]/90 list-disc list-inside">
                <li>Abra seu e-mail e clique no link de ativação da conta</li>
                <li>Inicie pela <strong>Etapa 01: Seguir mesmo doendo</strong></li>
                <li>Baixe o Caderno de Reflexão das 10 Etapas</li>
              </ul>
            </div>

            <button
              onClick={onClose}
              className="px-8 py-3 bg-gradient-to-r from-[#D6A84F] to-[#B88732] hover:from-[#E8D5A8] hover:to-[#D6A84F] text-[#0B1726] font-black text-xs uppercase rounded-xl transition-all shadow-lg cursor-pointer"
            >
              Concluir & Acessar Área de Membros
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
