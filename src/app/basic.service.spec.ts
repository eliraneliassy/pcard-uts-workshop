import { LoggerService } from './logger.service';
import { TestBed } from '@angular/core/testing';

import { BasicService } from './basic.service';

describe('BasicService', () => {
  let service: BasicService;
  let loggerService: LoggerService;

  beforeEach(() => {
    // Arange
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicService);
    loggerService = TestBed.inject(LoggerService);
  });

  it('should be created', () => {
    // Assert
    expect(service).toBeTruthy();
  });

  it('should sum two variables', () => {
 
    // Arange
    jest.spyOn(loggerService, 'log');


    // Act
    const res = service.plus(2, 2);
    const res2 = service.plus(1, 6);

    // Assert
    expect(res).toBe(4);
    expect(loggerService.log).toHaveBeenCalledTimes(2);

    
    expect(res2).toBe(7);
    // expect(loggerService.log).toHaveBeenCalledTimes(2);
  })
});

// ----------- USE THE 1ST EXAMPLE ------

describe('BasicService', () => {
  let service: BasicService;
  let loggerService: LoggerService;
  beforeEach(() => {
    loggerService = new LoggerService();
    service = new BasicService(loggerService);
  });

  it('should sum two variables', () => {
    
    jest.spyOn(loggerService, 'log');

    const res = service.plus(2, 2);

    expect(res).toBe(4);
    expect(loggerService.log).toHaveBeenCalledTimes(1);

    const res2 = service.plus(1, 6);
    expect(res2).toBe(7);

    expect(loggerService.log).toHaveBeenCalledTimes(2);
  })
})
