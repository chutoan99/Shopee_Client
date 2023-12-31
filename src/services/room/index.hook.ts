import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RoomsResponse } from './index.response';
import dotenv from 'dotenv';
export const RoomApi = createApi({
  reducerPath: 'Room',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_REACT_APP_API_HOST}/`,
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      headers.set('Authorization', `Bearer ${localStorage.getItem('token-shopee')}`);
      return headers;
    },
  }),
  endpoints: (build) => ({
    getRooms: build.query<RoomsResponse, void>({
      query: () => 'room',
    }),

    getRoom: build.query<any, any>({
      query: (room: any) => `room/${room.roomid}`,
    }),
    createRoom: build.mutation<any, any>({
      query: (body) => {
        console.log(body, 'body');
        return {
          url: 'room',
          method: 'POST',
          body,
        };
      },
    }),

    deleteRoom: build.mutation<any, any>({
      query: (roomid) => {
        return {
          url: `room/:${roomid}`,
          method: 'DELETE',
        };
      },
    }),
  }),
});
export const { useGetRoomsQuery, useGetRoomQuery, useCreateRoomMutation, useDeleteRoomMutation } = RoomApi;
