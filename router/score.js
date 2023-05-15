// score.js 파일

import express from 'express';
import { Score } from '../data/score.js';

const router = express.Router();

// 점수 목록 조회
router.get('/', (req, res, next) => {
  res.json(Score);
});

// 점수 생성
router.post('/', (req, res, next) => {
  const { java_score, python_score, c_score, total_score, average_score } = req.body;
  // 점수 생성 로직 추가

  res.status(201).json({ message: 'Score created successfully' });
});

// 점수 수정
router.put('/:id', (req, res, next) => {
  const { id } = req.params;
  const { java_score, python_score, c_score, total_score, average_score } = req.body;
  // 점수 수정 로직 추가

  res.json({ message: 'Score updated successfully' });
});

// 점수 삭제
router.delete('/:id', (req, res, next) => {
  const { id } = req.params;
  // 점수 삭제 로직 추가

  res.json({ message: 'Score deleted successfully' });
});

export default router;
