import Image from "next/image";

export default function Terms() {
  return (
    <div className="flex min-h-screen w-full flex-col gap-4 p-4">
      <Image
        src="/icon.png"
        alt=""
        width={500}
        height={500}
        className="mx-auto h-40 w-max object-contain"
      />
      <span className="font-semibold">1. Termos</span>
      <span>
        Ao acessar ao site Palheta Arquitetura, concorda em cumprir estes termos
        de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é
        responsável pelo cumprimento de todas as leis locais aplicáveis. Se você
        não concordar com algum desses termos, está proibido de usar ou acessar
        este site. Os materiais contidos neste site são protegidos pelas leis de
        direitos autorais e marcas comerciais aplicáveis.
      </span>
      <span className="font-semibold">2. Uso de Licença</span>
      <span>
        É concedida permissão para baixar temporariamente uma cópia dos
        materiais (informações ou software) no site Palheta Arquitetura , apenas
        para visualização transitória pessoal e não comercial. Esta é a
        concessão de uma licença, não uma transferência de título e, sob esta
        licença, você não pode:
      </span>
      <span className="ml-4">modificar ou copiar os materiais;</span>
      <span className="ml-4">
        usar os materiais para qualquer finalidade comercial ou para exibição
        pública (comercial ou não comercial);
      </span>
      <span className="ml-4">
        tentar descompilar ou fazer engenharia reversa de qualquer software
        contido no site Palheta Arquitetura;
      </span>
      <span className="ml-4">
        remover quaisquer direitos autorais ou outras notações de propriedade
        dos materiais; ou
      </span>
      <span className="ml-4">
        transferir os materiais para outra pessoa ou 'espelhe' os materiais em
        qualquer outro servidor.
      </span>
      <span>
        Esta licença será automaticamente rescindida se você violar alguma
        dessas restrições e poderá ser rescindida por Palheta Arquitetura a
        qualquer momento. Ao encerrar a visualização desses materiais ou após o
        término desta licença, você deve apagar todos os materiais baixados em
        sua posse, seja em formato eletrónico ou impresso.
      </span>
      <span className="font-semibold">3. Isenção de responsabilidade</span>
      <span className="ml-4">
        Os materiais no site da Palheta Arquitetura são fornecidos 'como estão'.
        Palheta Arquitetura não oferece garantias, expressas ou implícitas, e,
        por este meio, isenta e nega todas as outras garantias, incluindo, sem
        limitação, garantias implícitas ou condições de comercialização,
        adequação a um fim específico ou não violação de propriedade intelectual
        ou outra violação de direitos.
      </span>
      <span className="ml-4">
        Além disso, o Palheta Arquitetura não garante ou faz qualquer
        representação relativa à precisão, aos resultados prováveis ​​ou à
        confiabilidade do uso dos materiais em seu site ou de outra forma
        relacionado a esses materiais ou em sites vinculados a este site.
      </span>
      <span className="font-semibold">4. Limitações</span>
      <span>
        Em nenhum caso o Palheta Arquitetura ou seus fornecedores serão
        responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos por
        perda de dados ou lucro ou devido a interrupção dos negócios)
        decorrentes do uso ou da incapacidade de usar os materiais em Palheta
        Arquitetura, mesmo que Palheta Arquitetura ou um representante
        autorizado da Palheta Arquitetura tenha sido notificado oralmente ou por
        escrito da possibilidade de tais danos. Como algumas jurisdições não
        permitem limitações em garantias implícitas, ou limitações de
        responsabilidade por danos conseqüentes ou incidentais, essas limitações
        podem não se aplicar a você.
      </span>
      <span className="font-semibold">5. Precisão dos materiais</span>
      <span>
        Os materiais exibidos no site da Palheta Arquitetura podem incluir erros
        técnicos, tipográficos ou fotográficos. Palheta Arquitetura não garante
        que qualquer material em seu site seja preciso, completo ou atual.
        Palheta Arquitetura pode fazer alterações nos materiais contidos em seu
        site a qualquer momento, sem aviso prévio. No entanto, Palheta
        Arquitetura não se compromete a atualizar os materiais.
      </span>
      <span className="font-semibold">6. Links</span>
      <span>
        O Palheta Arquitetura não analisou todos os sites vinculados ao seu site
        e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão
        de qualquer link não implica endosso por Palheta Arquitetura do site. O
        uso de qualquer site vinculado é por conta e risco do usuário.
      </span>
      <span>Modificações</span>
      <span>
        O Palheta Arquitetura pode revisar estes termos de serviço do site a
        qualquer momento, sem aviso prévio. Ao usar este site, você concorda em
        ficar vinculado à versão atual desses termos de serviço.
      </span>
      <span>Lei aplicável</span>
      <span>
        Estes termos e condições são regidos e interpretados de acordo com as
        leis do Palheta Arquitetura e você se submete irrevogavelmente à
        jurisdição exclusiva dos tribunais naquele estado ou localidade.
      </span>
    </div>
  );
}
