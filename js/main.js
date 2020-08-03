window.addEventListener('load', function () {
    'use strict';

    const startSlide = document.getElementById('startSlide');
    const startBuild = document.getElementById('startBuild');
    const overlay = document.getElementById('overlay');
    const feedbackSlide = document.getElementById('feedbackSlide');
    const armRight = document.getElementById('armRight');
    const armLeft = document.getElementById('armLeft');
    const head = document.getElementById('head');
    const chest = document.getElementById('chest');
    const legRight = document.getElementById('legRight');
    const legLeft = document.getElementById('legLeft');

    const piecesSet = {
        rightArm: false,
        leftArm: false,
        rightLeg: false,
        leftLeg: false,
        head: false,
        chest: false,
    };

    //
    // Draggables

    const armRightPiece = new PlainDraggable(armRight);
    const armLeftPiece = new PlainDraggable(armLeft);
    const headPiece = new PlainDraggable(head);
    const chestPiece = new PlainDraggable(chest);
    const legRightPiece = new PlainDraggable(legRight);
    const legLeftPiece = new PlainDraggable(legLeft);

    armRightPiece.name = 'rightArm';
    armLeftPiece.name = 'leftArm';
    headPiece.name = 'head';
    chestPiece.name = 'chest';
    legRightPiece.name = 'rightLeg';
    legLeftPiece.name = 'leftLeg';

    armRightPiece.snap = {
        targets: [{ x: 465, y: 115 }],
        corner: 'tl',
    };

    armLeftPiece.snap = {
        targets: [{ x: 345, y: 115 }],
        corner: 'tr',
    };

    headPiece.snap = {
        targets: [{ x: 408, y: 112 }],
        center: true,
    };

    chestPiece.snap = {
        targets: [{ x: 405, y: 185 }],
        center: true,
    };

    legRightPiece.snap = {
        targets: [{ x: 414, y: 265 }],
        corner: 'tl',
    };

    legLeftPiece.snap = {
        targets: [{ x: 397, y: 265 }],
        corner: 'tr',
    };

    armRightPiece.onDragEnd = function (newPosition) {
        checkPosition(this, newPosition.left, newPosition.top);
        checkWin();
    };

    armLeftPiece.onDragEnd = function (newPosition) {
        checkPosition(this, newPosition.left, newPosition.top);
        checkWin();
    };

    headPiece.onDragEnd = function (newPosition) {
        checkPosition(this, newPosition.left, newPosition.top);
        checkWin();
    };

    chestPiece.onDragEnd = function (newPosition) {
        checkPosition(this, newPosition.left, newPosition.top);
        checkWin();
    };

    legRightPiece.onDragEnd = function (newPosition) {
        checkPosition(this, newPosition.left, newPosition.top);
        checkWin();
    };

    legLeftPiece.onDragEnd = function (newPosition) {
        checkPosition(this, newPosition.left, newPosition.top);
        checkWin();
    };

    //
    // Functions

    startBuild.addEventListener('click', () => {
        startSlide.style.display = 'none';
        overlay.style.display = 'none';
    });

    const checkPosition = (piece, posX, posY) => {
        if (piece.rect.top === posY && piece.rect.left === posX) {
            piecesSet[piece.name] = true;
        }
    };

    const checkWin = () => {
        if (
            piecesSet.rightArm &&
            piecesSet.leftArm &&
            piecesSet.head &&
            piecesSet.chest &&
            piecesSet.rightLeg &&
            piecesSet.leftLeg
        ) {
            overlay.style.display = 'block';
            feedbackSlide.style.display = 'block';
        }
    };

    document
        .getElementById('feedbackSlideClose')
        .addEventListener('click', () => {
            document.getElementById('gameContainer').style.display = 'none';
            document.getElementById('overlay').style.display = 'none';
            document.getElementById('overlay').style.display = 'none';
            document.getElementById('feedbackSlide').style.display = 'none';
            document.getElementById('simpleshowLogo').style.display = 'block';
        });

    //
    //
    //
    //

    window.addEventListener('click', () => {
        //console.log(piecesSet);
        //console.log(legLeftPiece);
        //console.log(draggable);
    });
});
