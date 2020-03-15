function createTriangle(altura, lado, posX, posY, tipo) {
    let canvas = document.getElementById('screen');
    if (canvas.getContext) {
        let h = altura, l = lado, x = posX, y = posY;
        let a, b, c, d, e;
        let ctx = canvas.getContext('2d');

        a = 0+x //origem x
        c = l+x //x = lado
        d = l/2+x//x = meio lado
        
        if (tipo == "cima"){
            b = h+y //y = altura
            e = 0+y //origem y
            ctx.fillStyle = 'pink'
        }else if (tipo == "baixo"){
            b = 0+y //origem y
            e = h+y //y = altura
            ctx.fillStyle = 'red'
        }
        
        let triangle = new Path2D()

        triangle.moveTo(a,b)
        triangle.lineTo(c,b)
        triangle.lineTo(d,e)
        triangle.lineTo(a,b)

        ctx.fill(triangle)
    }
}

function createTabuleiro(triangleHeight, triangleLado, quadInicial){
    let posX = triangleLado
    let posY = 0
    let tipo = ["baixo", "cima"]
    let pad = triangleLado/2

    for (let n=3; n<=11; n++){
        let qtd = 2*n-1
        for (let i=quadInicial; i<qtd+quadInicial; i++){
            createTriangle(triangleHeight, triangleLado, (pad*(3-n)+(posX*i*0.5)), posY, tipo[i%2])
        }
        posY += triangleHeight    
    }

    tipo = ["cima", "baixo"]

    for (let n=11; n>=9; n--){
        let qtd = 2*n-1
        for (let i=quadInicial; i<qtd+quadInicial; i++){
            createTriangle(triangleHeight, triangleLado, (pad*(3-n)+(posX*i*0.5)), posY, tipo[i%2])
        }
        posY += triangleHeight    
    }
}