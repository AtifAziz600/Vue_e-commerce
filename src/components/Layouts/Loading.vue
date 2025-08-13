<template>
  <div class="loading-overlay" v-if="overlay" :style="overlayStyle">
    <div class="loading-content">
      <div :class="['loader', type]" :style="loaderStyle"></div>
      <div v-if="showText" class="loading-text" :style="textStyle">{{ text }}</div>
    </div>
  </div>
  <div v-else class="loader-container">
    <div :class="['loader', type]" :style="loaderStyle"></div>
    <div v-if="showText" class="loading-text" :style="textStyle">{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: 'LoadingComponent',
  props: {
    type: {
      type: String,
      default: 'dots', 
      validator: value => ['spinner', 'dots', 'bars', 'pulse'].includes(value)
    },
    size: {
      type: [String, Number],
      default: 40
    },
    color: {
      type: String,
      default: '#3498db'
    },
    text: {
      type: String,
      default: 'Loading...'
    },
    showText: {
      type: Boolean,
      default: true
    },
    textColor: {
      type: String,
      default: '#333'
    },
    overlay: {
      type: Boolean,
      default: false
    },
    overlayColor: {
      type: String,
      default: 'rgba(255, 255, 255, 0.8)'
    },
    thickness: {
      type: [String, Number],
      default: 4
    }
  },
  computed: {
    loaderStyle() {
      const baseStyle = {
        width: `${this.size}px`,
        height: `${this.size}px`
      };

      if (this.type === 'spinner') {
        return {
          ...baseStyle,
          border: `${this.thickness}px solid rgba(0, 0, 0, 0.1)`,
          'border-radius': '50%',
          'border-top-color': this.color,
          animation: 'spin 1s ease-in-out infinite'
        };
      } else if (this.type === 'dots') {
        return {
          ...baseStyle,
          display: 'flex',
          'justify-content': 'space-around',
          'align-items': 'flex-end'
        };
      } else if (this.type === 'bars') {
        return {
          ...baseStyle,
          display: 'flex',
          'justify-content': 'space-around',
          'align-items': 'flex-end'
        };
      } else if (this.type === 'pulse') {
        return {
          ...baseStyle,
          'background-color': this.color,
          'border-radius': '50%',
          animation: 'pulse 1.5s ease-in-out infinite'
        };
      }
      return baseStyle;
    },
    textStyle() {
      return {
        color: this.textColor,
        'margin-top': '10px',
        'font-size': `${Math.max(12, this.size / 3)}px`
      };
    },
    overlayStyle() {
      return {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        'background-color': this.overlayColor,
        display: 'flex',
        'justify-content': 'center',
        'align-items': 'center',
        'z-index': 9999
      };
    }
  }
};
</script>

<style scoped>
.loader-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.loading-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(0.8);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
}

.loader.dots::after,
.loader.dots::before {
  content: '';
  display: block;
  width: 20%;
  height: 20%;
  background-color: v-bind(color);
  border-radius: 50%;
  animation: dots 1s ease-in-out infinite;
}

.loader.dots::before {
  animation-delay: 0.1s;
}

.loader.dots::after {
  animation-delay: 0.2s;
}

@keyframes dots {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-50%);
  }
}

.loader.bars {
  display: flex;
  justify-content: space-between;
}

.loader.bars::before,
.loader.bars::after {
  content: '';
  display: block;
  width: 20%;
  background-color: v-bind(color);
  animation: bars 1s ease-in-out infinite;
}

.loader.bars::before {
  animation-delay: 0.1s;
}

.loader.bars::after {
  animation-delay: 0.2s;
}

@keyframes bars {
  0%, 100% {
    height: 20%;
  }
  50% {
    height: 100%;
  }
}
</style>