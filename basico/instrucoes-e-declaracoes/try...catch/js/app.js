// Blocos try aninhados
try {
    try {
        throw new Error('oops')
    } finally {
        console.log('finally');
    }
} catch (ex) {
    console.log("exterior", ex.message);
}

// Agora, caso nós já capturamos a exceção no 
// bloco try interno adicionando um bloco catch
try {
    try {
        throw new Error('opaa')
    } catch (ex) {
        console.log('interno', ex.message);
    } finally {
        console.log('finally');
    }
} catch (ex) {
    console.error('externo', ex.message);
}
// E agora, vamos relançar o erro.
try {
    try {
        throw new Error('oooppaa')
    } catch (ex) {
        console.error('interno', ex.message);

        throw ex
    } finally {
        console.log('finally');
    }
} catch (ex) {
    console.error('externo', ex.message);
}
// Retornando de um bloco finally
function teste() {
    try {
        try {
            throw new Error('opaah')
        } catch (ex) {
            console.error('interno', ex.message);

            throw ex
        } finally {
            console.log('finally');

            return
        }
    } catch (ex) {
        console.error('externo', ex.message);
    }
}
teste()