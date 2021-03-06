import type { DialogApiInjection } from "naive-ui/lib/dialog/src/DialogProvider";
import type { MessageApiInjection } from "naive-ui/lib/message/src/MessageProvider";
import type { LoadingBarApiInjection } from "naive-ui/lib/loading-bar/src/LoadingBarProvider";
import type { NotificationApiInjection } from "naive-ui/lib/notification/src/NotificationProvider";

declare global {
  interface Window {
    $message: MessageApiInjection;
    $dialog: DialogApiInjection;
    $loading: LoadingBarApiInjection;
    $notification: NotificationApiInjection;
  }
}
