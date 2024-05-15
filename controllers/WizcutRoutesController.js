const WizcutRoutesController = async (userId, msg) => {
  const assistant = await getAssistant(1);

  let threadId;
  const user = await findUserById(userId);
  const thread = await findThread(userId, serviceId);

  if (thread.length) {
    if (!thread[0].thread) {
      const nTread = await createThread();
      await updateThread(userId, serviceId, nTread.id);
      threadId = nTread.id;
    } else {
      threadId = thread[0].thread;
    }
  } else {
    const nTread = await createThread();
    await createUserThread(userId, serviceId, nTread.id);
    threadId = nTread.id;
  }

  const res = await ask(userId, msg, threadId, assistant);
  return res;
};

export default WizcutRoutesController;
