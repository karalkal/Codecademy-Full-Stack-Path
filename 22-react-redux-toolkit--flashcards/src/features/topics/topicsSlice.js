import { createSlice } from "@reduxjs/toolkit";

/*APP STATE WILL BE
        {
        topics: {
            topics: {
            '123': {
                id: '123',
                name: 'example topic',
                icon: 'icon url',
                quizIds: ['456']
                }
            }
        },
        quizzes: {
            quizzes: {
            '456': {
                id: '456',
                topicId: '123',
                name: 'quiz for example topic',
                cardIds: ['789', '101', '102']
            }
        }
    },
*/

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {},
        // pendingTopicCreate: false,
        // failedTopicCreate: false,

    },
    reducers: {
        //  You can expect the payload for this action to look like {id: '123456', name: 'name of topic', icon: 'icon url'}
        //  Each topic object will have a quizIds property, which will correspond to an array containing the ids of each quiz associated with the topic.
        addTopic: (state, action) => {
            const { id, name, icon } = action.payload
            const newTopic = {
                id, name, icon,
                quizIds: [],
            }
            console.log(newTopic)
            state.topics[id] = newTopic; // add new object to "dictionary" - Object.assign(objectname,{prooerty:value});
            return state;
        }
    },
})


// export const addTopicIsPendingSelector = (state) => state.topics.pendingTopicCreate;
export const selectTopics = (state) => state.topics.topics;
export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;

