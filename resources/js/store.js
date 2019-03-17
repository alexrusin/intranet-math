export default {
  state: {
    lessons: {
      'startOverPathName': '/',
      'kindergarten': [
        'k-problem-1',
        'k-problem-2'
      ]
    },
    grade: '',
    showMenuHeader: true,
    lessonData: {
      numberOfProblems: 0,
      correct: 0,
      incorrect: 0,
      currentProblem: 0
    }
  },
  mutations: {
    setGrade (state, level) {
      state.grade = level;
    },

    setStartOverPathName(state, pathName) {
      state.lessons.startOverPathName = pathName;
    },
    
    setMenuHeader(state, showHeader) {
      state.showMenuHeader = showHeader;
    },
    
    initializeLessonData(state, data) {
      state.lessonData = data;
    },

    incrementCorrect(state) {
      state.lessonData.correct++;
    },

    incrementIncorrect(state) {
      state.lessonData.incorrect++;
    },

    incrementCurrentProblem(state) {
      state.lessonData.currentProblem++;
    }

  }
};