var TennisGame2 = function(player1Name, player2Name) {
    this.P1point = 0;
    this.P2point = 0;

    this.P1res = "";
    this.P2res = "";

    this.player1Name = player1Name;
    this.player2Name = player2Name;
};

function IsequalCero(Ppoint){
    return (Ppoint === 0);
}

function IsequalOne(Ppoint){
    return (Ppoint === 1);
}

function IsequalTwo(Ppoint){
    return (Ppoint === 2);
}

function IsequalThree(Ppoint){
    return (Ppoint === 3);
}

function IsLessToThree(){
    return (this.P1point === this.P2point && this.P1point < 3);
}

function ReturnLove(){
    return this.P2res = "Love";
}

function ReturnScore(){
   return score = this.P1res + "-" + this.P2res;
}


TennisGame2.prototype.getScore = function() {
    var score = "";
    if (IsLessToThree()) {
        if (IsequalCero(this.P1point))
            score = "Love";
        if (IsequalOne(this.P1point))
            score = "Fifteen";
        if (IsequalTwo(this.P1point))
            score = "Thirty";
        score += "-All";
    }
    if (this.P1point === this.P2point && this.P1point > 2)
        score = "Deuce";

    if (this.P1point > 0 && this.P2point === 0) {
        if (IsequalOne(this.P2point))
            this.P1res = "Fifteen";
        if (IsequalTwo(this.P2point))
            this.P1res = "Thirty";
        if (IsequalThree(this.P2point))
            this.P1res = "Forty";

        ReturnLove();
        ReturnScore();
    }
    if (this.P2point > 0 && this.P1point === 0) {
        if (IsequalOne(this.P2point))
            this.P2res = "Fifteen";
        if (IsequalTwo(this.P2point))
            this.P2res = "Thirty";
        if (IsequalThree(this.P2point))
            this.P2res = "Forty";

        ReturnLove();
        ReturnScore();
    }

    if (this.P1point > this.P2point && this.P1point < 4) {
        if (IsequalTwo(this.P1point))
            this.P1res = "Thirty";
        if (IsequalThree(this.P1point))
            this.P1res = "Forty";
        if (IsequalOne(this.P2point))
            this.P2res = "Fifteen";
        if (IsequalTwo(this.P2point))
            this.P2res = "Thirty";
        score = this.P1res + "-" + this.P2res;
    }
    if (this.P2point > this.P1point && this.P2point < 4) {
        if (IsequalTwo(this.P2point))
            this.P2res = "Thirty";
        if (IsequalThree(this.P2point))
            this.P2res = "Forty";
        if (IsequalOne(this.P1point))
            this.P1res = "Fifteen";
        if (IsequalTwo(this.P1point))
            this.P1res = "Thirty";
        score = this.P1res + "-" + this.P2res;
    }

    if (this.P1point > this.P2point && this.P2point >= 3) {
        score = "Advantage player1";
    }

    if (this.P2point > this.P1point && this.P1point >= 3) {
        score = "Advantage player2";
    }

    if (this.P1point >= 4 && this.P2point >= 0 && (this.P1point - this.P2point) >= 2) {
        score = "Win for player1";
    }
    if (this.P2point >= 4 && this.P1point >= 0 && (this.P2point - this.P1point) >= 2) {
        score = "Win for player2";
    }
    return score;
};

TennisGame2.prototype.SetP1Score = function(number) {
    var i;
    for (i = 0; i < number; i++) {
        this.P1Score();
    }
};

TennisGame2.prototype.SetP2Score = function(number) {
    var i;
    for (i = 0; i < number; i++) {
        this.P2Score();
    }
};

TennisGame2.prototype.P1Score = function() {
    this.P1point++;
};

TennisGame2.prototype.P2Score = function() {
    this.P2point++;
};

TennisGame2.prototype.wonPoint = function(player) {
    if (player === "player1")
        this.P1Score();
    else
        this.P2Score();
};

if (typeof window === "undefined") {
    module.exports = TennisGame2;
}

module.exports = wonPoint;