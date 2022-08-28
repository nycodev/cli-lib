const pegaArquivo = require('../index.js');

const arrayResult = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
]

describe('pegaArquivo::', () => {
    it('deve ser uma função', () => {
        expect(typeof pegaArquivo).toBe('function');
    });
    it('deve resolver a função e retornar array com resultados', async () => {
        await expect(pegaArquivo('./test/arquivos/texto1.md')).resolves.toEqual(arrayResult);
    });
    it('deve retornar mensagem "não há links"', async () => {
        const resultado = await pegaArquivo('./test/arquivos/texto1_semLinks.md');
        expect(resultado).toBe('não há links');
    });
    it('deve lançar um erro na falta de arquivo', async () => {
        await expect(pegaArquivo('./test/arquivos')).rejects.toThrow(/não há arquivo no caminho/);
    });
})
