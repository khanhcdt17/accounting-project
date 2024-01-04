import { Component } from '@angular/core';
import { BlogStore } from './blog-page.store';
import { LIST_TABS } from './blog-page.util';
import { Subject, debounceTime, distinctUntilChanged, pipe } from 'rxjs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss'],
  providers: [BlogStore],
})
export class BlogPageComponent {
  items = [
    {
      image1: 'https://i.imgur.com/fz6vPUq.jpg',
      title1: 'Dịch vụ kế toán trọn gói tốt nhất năm 2023 tại Việt Nam',
      image2: 'https://i.imgur.com/zuC1C4w.jpg',
      title2:
        'Nhân Viên Đại Lý Thuế Làm Gì? 3 Điều Bạn Cần Biết Về Vai Trò Quan Trọng Này',
    },
    {
      image1: 'https://i.imgur.com/xZeFzGg.jpg',
      title1:
        'Dịch Vụ Kế toán Trọn Gói Giá Rẻ Tại Việt Nam: Top 1 Lựa chọn cho doanh nghiệp',
      image2: 'https://i.imgur.com/kFNcTLb.jpg',
      title2:
        'Dịch Vụ Kế Toán – 7 Bước Quan Trọng để Tối Ưu Hóa Quy Trình Kế Toán',
    },
    {
      image1: 'https://i.imgur.com/pIK78mW.jpg',
      title1:
        'Một số hạn chế pháp lý về thành lập đại lý thuế quyết toán ở Việt Nam 2024',
      image2: 'https://i.imgur.com/84QeOrl.jpg',
      title2: 'Giải pháp thuế toàn diện khi dùng đại lý thuế tại Việt Nam',
    },
    {
      image1: 'https://i.imgur.com/4HpQH4e.jpg',
      title1:
        'Thành Lập Đại Lý Thuế Uy Tín Cần Điều Kiện, Thủ Tục Gì Năm 2024?',
      image2: 'https://i.imgur.com/Wh45eba.jpg',
      title2: '3 Lợi Ích Khi Hợp Tác Với Đại Lý Thuế',
    },
    {
      image1: 'https://i.imgur.com/nFGdG4v.jpg',
      title1: 'Chu trình kế toán: Giải thích và ứng dụng kế toán cơ bản',
      image2: 'https://i.imgur.com/vUWexqh.jpg',
      title2: 'Báo giá dịch vụ kế toán thuế',
    },
    {
      image1: 'https://i.imgur.com/Wh45eba.jpg',
      title1: '5 lợi ích của việc sử dụng phần mềm quản lý kế toán',
      image2: 'https://i.imgur.com/NfCVvmE.jpg',
      title2:
        'Thành Lập Đại Lý Thuế Uy Tín Cần Điều Kiện, Thủ Tục Gì Năm 2024?',
    },
  ];

  defaultUrl = 'https://i.imgur.com/zuC1C4w.jpg';
  private inputSubject = new Subject<string>();
  listTabs = LIST_TABS;

  constructor(private blogStore: BlogStore, public sanitizer: DomSanitizer) {
    this.inputSubject
      .pipe(debounceTime(200), distinctUntilChanged())
      .subscribe((value) => {
        this.blogStore.patchState({
          searchValue: value,
        });
      });
  }

  vm$ = this.blogStore.select((state) => {
    return {
      tabValue: state.tabValue,
      displayContents: state.displayContents,
    };
  });

  tabClick(tabValue: string) {
    this.blogStore.patchState({ tabValue });
  }

  searchInput(event: Event) {
    const inputValue = (<HTMLInputElement>event.target).value;
    this.inputSubject.next(inputValue);
  }
}
