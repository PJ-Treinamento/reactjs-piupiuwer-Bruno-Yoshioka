import React, { useCallback, useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

const api = axios.create({
    baseURL: 'https://piupiuwer.polijrinternal.com',
});

export default api;