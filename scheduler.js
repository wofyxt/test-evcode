console.log('[Scheduler] Модуль загружен и инициализирован синхронно.');
const tasks = new Map();

function scheduleTask(name, interval, task) {
  const id = setInterval(task, interval);
  tasks.set(name, { id, interval, task });
  console.log(`[Scheduler] Задача "${name}" добавлена. Интервал: ${interval}мс`);
  return {
    name,
    stop: () => {
      clearInterval(id);
      tasks.delete(name);
      console.log(`[Scheduler] Задача "${name}" остановлена.`);
    }
  };
}

module.exports = { scheduleTask };