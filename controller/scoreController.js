import { Score } from '../data/score.js';
import { Student } from '../data/student.js';

// 학생의 점수 조회
export const getScoreById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const score = await Score.findOne({ where: { id }, include: [Student] });
    if (score) {
      res.json(score);
    } else {
      res.status(404).json({ message: 'Score not found' });
    }
  } catch (error) {
    next(error);
  }
};

// 점수 생성
export const createScore = async (req, res, next) => {
  const { id } = req.params;
  const { java_score, python_score, c_score } = req.body;
  try {
    const student = await Student.findByPk(id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    const total_score = java_score + python_score + c_score;
    const average_score = total_score / 3;

    const score = await Score.create({
        id,
        java_score,
        python_score,
        c_score,
        total_score,
        average_score,
    });

    res.status(201).json(score);
  } catch (error) {
    next(error);
  }
};

// 점수 수정
export const updateScore = async (req, res, next) => {
  const { id } = req.params;
  const { java_score, python_score, c_score } = req.body;
  try {
    const score = await Score.findOne({ where: { id } });
    if (!score) {
      return res.status(404).json({ message: 'Score not found' });
    }

    const total_score = java_score + python_score + c_score;
    const average_score = total_score / 3;

    await score.update({
      java_score,
      python_score,
      c_score,
      total_score,
      average_score,
    });

    res.json(score);
  } catch (error) {
    next(error);
  }
};

// 점수 삭제
export const deleteScore = async (req, res, next) => {
  const { id } = req.params;
  try {
    const score = await Score.findOne({ where: { id } });
    if (score) {
      await score.destroy();
      res.json({ message: 'Score deleted successfully' });
    } else {
      res.status(404).json({ message: 'Score not found' });
    }
  } catch (error) {
    next(error);
  }
};