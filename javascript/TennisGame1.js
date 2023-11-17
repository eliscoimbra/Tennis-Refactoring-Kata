class TennisGame1{
    constructor(player1, player2){
        this.player1 = player1;
        this.player2 = player2
        this.m_score1 = 0;
        this.m_score2 = 0;
    }

    pontuarNoJogo(playerName){
        if(playerName == 'player1'){
            this.m_score1 +=1;
        }else{
            this.m_score2 +=1
        }
    }
    verificarEmpate(){
        const pontuacoes = {
            0: 'Love-All',
            1: 'Fifteen-All',
            2:  'Thirty-All',
            3:   'Deuce' 
        }
        const score = this.m_score1 == this.m_score2 ? pontuacoes[this.m_score1] : 'Não estão Empatados';
        return score  
    }
    verificarSeExisteVantagemDeAlgumJogadorMaiorQue4Pontos(){
        const OptionsMinusResult ={
            '1' :  "Advantage player 1",
            '-1' : "Advantage player 2",
            "2" : "Win Player 1",
            "3": "Win Player 1",
            "4": "Win Player 1"   
        }
         const minusResult = this.m_score1 - this.m_score2
         const score = (this.m_score2 >= 4 || this.m_score1 >= 4) ? OptionsMinusResult[minusResult]: "Não há vantagem entre os players"
         return score
        }
}

//TESTE DAS FUNCIONALIDADES DOS MÉTODOS
game1= new TennisGame1('Luana', 'Elis')
game1.pontuarNoJogo('player1')
game1.pontuarNoJogo("player2")
game1.pontuarNoJogo('player2')
game1.pontuarNoJogo('player2')
game1.pontuarNoJogo('player2')
console.log(game1.verificarEmpate());
console.log(game1.verificarSeExisteVantagemDeAlgumJogadorMaiorQue4Pontos())
console.log(game1)

//Não consegui desenvolver a refatoração desse for
// else {
//     for (var i = 1; i < 3; i++) {
//         if (i === 1) tempScore = this.m_score1;
//         else {
//             score += "-";
//             tempScore = this.m_score2;
//         }
//         switch (tempScore) {
//             case 0:
//                 score += "Love";
//                 break;
//             case 1:
//                 score += "Fifteen";
//                 break;
//             case 2:
//                 score += "Thirty";
//                 break;
//             case 3:
//                 score += "Forty";
//                 break;
//         }