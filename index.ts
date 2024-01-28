const listatiquetasGeradas =
    (objeto:
        {
            produto: string,
            lote: number,
            ano: number,
            qtd: number
        }
    ): string[] => {
        const saida: string[] = [];
        const totalDoProduto: number = objeto.qtd;

        for (let i = 1; i <= totalDoProduto; i++) {
            saida.push(`${objeto.lote}-${objeto.ano}-${i.toString().padStart(3, "0")}`);
        }

        return saida;
    }

console.log(listatiquetasGeradas(
    {
        produto: "CPU Dual Core 3.0 GHZ",
        lote: 321,
        ano: 2022,
        qtd: 5
    }
));