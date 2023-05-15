// score.js 파일

import express from 'express';
import * as scoreController from '../controller/scoreController.js';

const router = express.Router();

// id 임력시 해당 id학생 점수와 정보 조회
router.get('/:id', scoreController.getScoreById);

// 점수 생성 
router.post('/:id', scoreController.createScore);

// 점수 수정
router.put('/:id', scoreController.updateScore);

// 점수 삭제
router.delete('/:id', scoreController.deleteScore);

export default router;
