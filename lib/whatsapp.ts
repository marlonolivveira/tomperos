/**
 * Tomperos — link de WhatsApp com mensagem pré-preenchida.
 *
 * >>> TROQUE AQUI pelo número real da loja. <<<
 * Formato internacional, só dígitos: 55 (Brasil) + DDD + número.
 * Ex.: (11) 91234-5678  ->  "5511912345678"
 */
export const WHATSAPP_NUMBER = "55XXXXXXXXXXX";

export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Mensagens prontas reutilizadas pelos CTAs da página. */
export const waMessages = {
  hero: "Olá, Tomperos! Cheguei pelo site e quero conhecer os temperos de vocês.",
  produto: (nome: string) =>
    `Olá, Tomperos! Tenho interesse no tempero "${nome}". Pode me contar mais?`,
  catalogo: "Olá, Tomperos! Gostaria de receber o catálogo completo de temperos.",
  final: "Olá, Tomperos! Quero temperar minha cozinha. Como faço meu primeiro pedido?",
};
